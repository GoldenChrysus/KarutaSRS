module Api
	class LearnedItemResource < JSONAPI::Resource
		attributes :level, :next_review

		belongs_to :user, required: true
		belongs_to :poem, required: true
	end
end