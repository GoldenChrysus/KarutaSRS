module Api
	class UsersController < ApplicationController
		def review_queue
			user = nil

			begin
				user = User.find(params[:id])
			rescue StandardError => e
				# do nothing
			end

			items = (user != nil) ? user.review_queue : []

			render json: FormatJsonResult.call(data: items).result
		end

		def lesson_queue
			user = nil

			begin
				user = User.find(params[:id])
			rescue StandardError => e
				# do nothing
			end

			items = (user != nil) ? user.lesson_queue : []

			render json: FormatJsonResult.call(data: items).result
		end
	end
end