module Api
	class PoemResource < JSONAPI::Resource
		attributes :name, :first_verse, :second_verse

		has_many :learned_item
	end
end