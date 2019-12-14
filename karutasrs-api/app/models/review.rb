class Review < ApplicationRecord
	# Validation
	validates :wrong_total, presence: true
	validates :wrong_kimariji, presence: true
	validates :wrong_second_verse_answer, presence: true

	# Relationships
	belongs_to :learned_item, required: true
end