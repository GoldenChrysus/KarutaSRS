class User < ApplicationRecord
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

	def self.bearer_exists?(bearer)
		user = self.where({ bearer: bearer }).first

		return !!user
	end

	def self.hash_value(value)
		return Digest::SHA256.hexdigest(value)
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