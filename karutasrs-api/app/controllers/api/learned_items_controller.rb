module Api
	class LearnedItemsController < ApplicationController
		def complete_review
			item_id       = params[:id]
			parsed_data   = JSON.parse(request.raw_post)
			wrong_answers = parsed_data["wrong_answers"]
			item          = LearnedItem.find(item_id)
			result        = item.complete_review(wrong_answers)

			render json: FormatJsonResult.call(data: result).result
		end
	end
end