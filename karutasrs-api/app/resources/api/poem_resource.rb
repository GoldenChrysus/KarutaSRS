module Api
	class PoemResource < JSONAPI::Resource
		attributes :name, :first_verse, :second_verse_raw, :second_verse_card, :second_verse_answer, :kimariji, :translation, :background

		has_many :learned_items
	end
end