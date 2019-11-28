class User < ApplicationRecord
	validates :email, presence: true, uniqueness: true

	# Relationships
	has_many :learned_item
end
