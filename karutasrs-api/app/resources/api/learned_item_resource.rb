module Api
	class LearnedItemResource < JSONAPI::Resource
		attributes :level, :next_review

		filters :user_id

		belongs_to :user, required: true
		belongs_to :poem, required: true
	end
end