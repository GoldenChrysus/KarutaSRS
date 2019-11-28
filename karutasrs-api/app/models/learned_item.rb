class LearnedItem < ApplicationRecord
	validates :level, presence: true
	validates :next_review, presence: true

	belongs_to :user, required: true
	belongs_to :poem, required: true
end
