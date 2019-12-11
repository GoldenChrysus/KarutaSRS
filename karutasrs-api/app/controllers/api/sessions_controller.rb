module Api
	class SessionsController < ApplicationController
		skip_before_action :authenticate_request

		def authenticate
			parsed_data = JSON.parse(request.raw_post)
			user_search = User.login(parsed_data["email"], parsed_data["password"])
			result      = {
				:success => true,
				:user    => user_search
			}

			render json: FormatJsonResult.call(data: result).result
		end
	end
end