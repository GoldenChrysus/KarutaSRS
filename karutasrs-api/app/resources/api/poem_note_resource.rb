module Api
	class PoemNoteResource < JSONAPI::Resource
		attributes :note

		belongs_to :user, required: true
		belongs_to :poem, required: true
	end
end