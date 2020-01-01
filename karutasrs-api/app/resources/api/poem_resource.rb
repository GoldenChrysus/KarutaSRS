module Api
	class PoemResource < JSONAPI::Resource
		attributes :name, :first_verse, :second_verse_raw, :second_verse_card, :second_verse_answer, :kimariji, :translation, :background, :note

		has_many :learned_items
		has_many :poem_notes
	end
end