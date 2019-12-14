class User < ApplicationRecord
	attribute :review_queue_length
	attribute :lesson_queue_length

	# Validation
	validates :email, presence: true, uniqueness: true
	validates :password, presence: true
	validates :bearer, presence: true, uniqueness: true

	# Relationships
	has_many :learned_items

	# Callbacks
	before_validation :create_bearer, on: :create
	after_validation :hash_password, on: :create

	def lesson_queue
		params = {
			:user_id     => self.id,
			:cutoff_time => Time.now.advance(:days => -1)
		}
		sql    =
			"SELECT
				p.id
			FROM
				poems p
			LEFT JOIN
				learned_items i
			ON
				i.poem_id = p.id AND
				i.user_id = :user_id
			WHERE
				i.id IS NULL
			ORDER BY
				(LENGTH(p.kimariji) + LENGTH(p.second_verse_answer)) ASC,
				LENGTH(p.kimariji) ASC,
				LENGTH(p.second_verse_answer) ASC
			LIMIT
				5 - (
					SELECT
						COUNT(1)
					FROM
						learned_items i2
					WHERE
						i2.user_id = :user_id AND
						i2.created_at > :cutoff_time
				)"

		return Poem
			.where("id IN (#{sql})", params)
			.order("LENGTH(kimariji)", "LENGTH(second_verse_answer)", :id)
	end

	def lesson_queue_length
		return self.lesson_queue.length
	end

	def review_queue
		return JSON.parse LearnedItem
				.where(
					"user_id = :user_id AND
					next_review <= CURRENT_TIMESTAMP AND
					level <= 8",
					{
						:user_id => self.id
					}
				)
				.includes(:poem)
				.to_json(:include => :poem)
	end

	def review_queue_length
		return self.review_queue.length
	end

	def dashboard_stats
		data   = {
			:next_review    => "",
			:poems_by_level => 0,
			:worst_poems    => [],
			:best_poems     => []
		}
		params = {
			:id => self.id
		}

		# Item correct %'s
		sql =
			"SELECT
				l.poem_id,
				p.kimariji,
				p.second_verse_answer,
				(
					1 - (
						CAST(SUM(r.wrong_total) AS NUMERIC) /
						(
							SUM(r.wrong_total) + COUNT(1)
						)
					)
				) AS success_percent
			FROM
				reviews r
			JOIN
				learned_items l
			ON
				l.id = r.learned_item_id
			JOIN
				poems p
			ON
				p.id = l.poem_id
			WHERE
				l.user_id = :id
			GROUP BY
				l.poem_id,
				p.kimariji,
				p.second_verse_answer
			ORDER BY
				4 DESC"
		sql = ActiveRecord::Base.sanitize_sql_array([sql, params].flatten)
		res = ActiveRecord::Base.connection.exec_query(sql)

		puts res

		data[:best_poems]  = res[0..5]
		data[:worst_poems] = res[-5..-1]

		# Poems by level
		sql =
			"SELECT
				level,
				COUNT(1) AS count
			FROM
				learned_items
			WHERE
				user_id = :id
			GROUP BY
				level"
		sql = ActiveRecord::Base.sanitize_sql_array([sql, params].flatten)
		res = ActiveRecord::Base.connection.exec_query(sql)

		data[:poems_by_level] = res

		# Next review
		sql =
			"SELECT
				MIN(next_review) AS next_time
			FROM
				learned_items
			WHERE
				user_id = :id"
		sql = ActiveRecord::Base.sanitize_sql_array([sql, params].flatten)
		res = ActiveRecord::Base.connection.exec_query(sql)

		data[:next_review] = (res.length) ? res[0]["next_time"] : false

		return data
	end

	def self.bearer_exists?(bearer)
		user = self.where({ bearer: bearer }).first

		return !!user
	end

	def self.hash_value(value)
		return Digest::SHA256.hexdigest(value)
	end

	def self.login(email, password)
		hashed_password = self.hash_value(password)
		user            = self
			.where({
				:email    => email,
				:password => hashed_password
			})
			.first

		if (!user)
			raise ApiErrors::AuthenticationError::LoginFailed.new
		end

		user.password = nil

		return user
	end

	private
		def create_bearer
			while (!self.bearer || self.class.bearer_exists?(self.bearer))
				self.bearer = self.class.hash_value(SecureRandom.uuid)
			end
		end

		def hash_password
			self.password = self.class.hash_value(self.password)
		end
end