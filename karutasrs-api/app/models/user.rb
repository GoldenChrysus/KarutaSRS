class User < ApplicationRecord
	validates :email, presence: true, uniqueness: true
	validates :password, presence: true
	validates :bearer, presence: true, uniqueness: true

	# Relationships
	has_many :learned_items

	# Callbacks
	before_validation :create_bearer, on: :create

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

	private
		def create_bearer
			while (!self.bearer || self.class.bearer_exists?(self.bearer))
				self.bearer = Digest::SHA256.hexdigest(SecureRandom.uuid)
			end
		end
end