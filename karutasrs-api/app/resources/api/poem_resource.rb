module Api
	class PoemResource < JSONAPI::Resource
		attributes :name, :first_verse, :second_verse_raw, :second_verse_card, :kimariji

		has_many :learned_item
	end
end