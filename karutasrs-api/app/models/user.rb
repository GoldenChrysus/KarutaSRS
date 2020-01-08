class User < ApplicationRecord
	# Attributes
	attr_accessor :review_queue_length
	attr_accessor :lesson_queue_length

	# Validation
	validates :email, presence: true, uniqueness: {:case_sensitive => false}
	validates :password, presence: true
	validates :bearer, presence: true, uniqueness: true

	# Relationships
	has_many :learned_items
	has_many :poem_notes

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

		Poem.set_current_user(self)
		return Poem
			.where("id IN (#{sql})", params)
			.order("LENGTH(kimariji)", "LENGTH(second_verse_answer)", :id)
	end

	def lesson_queue_length
		return self.lesson_queue.length
	end

	def review_queue
		Poem.set_current_user(self)
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
							SUM(r.wrong_total) + (COUNT(1) * 2)
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

		data[:best_poems]  = res[0..4]

		reverse_index = (res.length > 5) ? -5 : res.length * -1

		data[:worst_poems] = res[reverse_index..-1]

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

	def review_stats
		data   = {
			:total_reviews               => 0,
			:kimariji_correct_rate       => 0,
			:second_verse_correct_rate   => 0,
			:performance_by_kimariji     => [],
			:performance_by_second_verse => []
		}
		params = {
			:id => self.id
		}

		# Total reviews and average times
		sql =
			"SELECT
				COUNT(1) AS total_reviews,
				SUM(average_total_time) / COUNT(1) AS average_total_time,
				SUM(average_correct_time) / COUNT(1) AS average_correct_time
			FROM
				reviews r
			JOIN
				learned_items l
			ON
				l.id = r.learned_item_id
			WHERE
				l.user_id = :id"
		sql = ActiveRecord::Base.sanitize_sql_array([sql, params].flatten)
		res = ActiveRecord::Base.connection.exec_query(sql)

		data[:total_reviews]        = (res.length) ? res[0]["total_reviews"] : 0
		data[:average_total_time]   = (res.length) ? res[0]["average_total_time"] : 0
		data[:average_correct_time] = (res.length) ? res[0]["average_correct_time"] : 0

		# Kimariji and 2nd verse correct %'s
		sql =
			"SELECT
				(
					1 - (
						CAST(SUM(r.wrong_kimariji) AS NUMERIC) /
						(
							SUM(r.wrong_kimariji) + COUNT(1)
						)
					)
				) AS success_kimariji_percent,
				(
					1 - (
						CAST(SUM(r.wrong_second_verse_answer) AS NUMERIC) /
						(
							SUM(r.wrong_second_verse_answer) + COUNT(1)
						)
					)
				) AS success_second_verse_percent
			FROM
				reviews r
			JOIN
				learned_items l
			ON
				l.id = r.learned_item_id
			WHERE
				l.user_id = :id"
		sql = ActiveRecord::Base.sanitize_sql_array([sql, params].flatten)
		res = ActiveRecord::Base.connection.exec_query(sql)

		data[:kimariji_correct_rate]     = (res.length) ? res[0]["success_kimariji_percent"] : false
		data[:second_verse_correct_rate] = (res.length) ? res[0]["success_second_verse_percent"] : false

		# Performance by kimariji length
		sql =
			"SELECT
				LENGTH(p.kimariji) AS length,
				(
					1 - (
						CAST(SUM(r.wrong_kimariji) AS NUMERIC) /
						(
							SUM(r.wrong_kimariji) + COUNT(1)
						)
					)
				) AS success_kimariji_percent
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
				1
			ORDER BY
				1 ASC"
		sql = ActiveRecord::Base.sanitize_sql_array([sql, params].flatten)
		res = ActiveRecord::Base.connection.exec_query(sql)

		data[:performance_by_kimariji] = res

		# Performance by 2nd verse answer length
		sql =
			"SELECT
				LENGTH(p.second_verse_answer) AS length,
				(
					1 - (
						CAST(SUM(r.wrong_second_verse_answer) AS NUMERIC) /
						(
							SUM(r.wrong_second_verse_answer) + COUNT(1)
						)
					)
				) AS success_second_verse_percent
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
				1
			ORDER BY
				1 ASC"
		sql = ActiveRecord::Base.sanitize_sql_array([sql, params].flatten)
		res = ActiveRecord::Base.connection.exec_query(sql)

		data[:performance_by_second_verse] = res

		return data
	end

	def self.bearer_exists?(bearer)
		user = self.where({ bearer: bearer }).first

		return !!user
	end

	def self.hash_value(value)
		return Digest::SHA256.hexdigest(value.to_s)
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