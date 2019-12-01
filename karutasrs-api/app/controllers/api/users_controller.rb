module Api
	class UsersController < ApplicationController
		def review_queue
			items = JSON.parse LearnedItem
				.where(
					"user_id = :user_id AND
					next_review <= CURRENT_TIMESTAMP AND
					level <= 8",
					{
						:user_id => params[:id]
					}
				)
				.includes(:poem)
				.to_json(:include => :poem)

			render json: FormatJsonResult.call(data: items).result
		end
	end
end