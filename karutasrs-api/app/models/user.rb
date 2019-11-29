class User < ApplicationRecord
	validates :email, presence: true, uniqueness: true
	validates :password, presence: true
	validates :bearer, presence: true, uniqueness: true

	# Relationships
	has_many :learned_item

	# Callbacks
	before_validation :create_bearer, on: :create

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