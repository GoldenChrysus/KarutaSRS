class Poem < ApplicationRecord
	validates :name, presence: true
	validates :first_verse, presence: true
	validates :second_verse_raw, presence: true
	validates :second_verse_card, presence: true
	validates :kimariji, presence: true

	# Relationships
	has_many :learned_item
end
