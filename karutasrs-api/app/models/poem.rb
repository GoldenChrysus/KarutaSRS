class Poem < ApplicationRecord
	validates :name, presence: true
	validates :first_verse, presence: true
	validates :second_verse, presence: true

	# Relationships
	has_many :learned_item
end
