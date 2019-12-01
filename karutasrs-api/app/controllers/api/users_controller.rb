module Api
	class UsersController < ApplicationController
		def review_queue
			items = JSON.parse LearnedItem
				.where(
					"user_id = :user_id AND
					next_review <= CURRENT_TIMESTAMP",
					{
						:user_id => params[:id]
					}
				)
				.includes(:poem)
				.to_json(:include => :poem)

			render json: FormatJsonResult.call(data: items).result, status: 200
		end
	end
end