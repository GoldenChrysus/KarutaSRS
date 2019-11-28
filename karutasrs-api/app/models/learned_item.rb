class LearnedItem < ApplicationRecord
	validates :level, presence: true
	validates :next_review, presence: true
	validates :user, presence: true
	validates :poem, presence: true

	# Relationships
	belongs_to :user, required: true
	belongs_to :poem, required: true
end
