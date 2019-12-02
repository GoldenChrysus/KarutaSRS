module Api
	class LearnedItemsController < ApplicationController
		def complete_review
			wrong_answers = parsed_data["wrong_answers"]
			item          = LearnedItem.find(item_id)
			result        = item.complete_review(wrong_answers)

			render json: FormatJsonResult.call(data: result[:result]).result, status: result[:status]
		end
	end
end