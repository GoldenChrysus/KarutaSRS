class User < ApplicationRecord
	validates :email, presence: true, uniqueness: true
	validates :password, presence: true

	# Relationships
	has_many :learned_item
end
