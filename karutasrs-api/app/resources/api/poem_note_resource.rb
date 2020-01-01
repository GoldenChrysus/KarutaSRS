module Api
	class PoemNoteResource < JSONAPI::Resource
		attributes :note

		filters :poem_id, :user_id

		belongs_to :user, required: true
		belongs_to :poem, required: true
	end
end