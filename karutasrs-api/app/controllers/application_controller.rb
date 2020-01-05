class ApplicationController < ActionController::Base
	include JSONAPI::ActsAsResourceController
	include Pundit

	protect_from_forgery with: :null_session

	before_action :authenticate_request

	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
	rescue_from ApiErrors::BaseError, with: :render_api_error
	rescue_from StandardError, with: :handle_standard_error

	def render_unprocessable_entity_response(exception)
		render json: exception.record.errors, status: :unprocessable_entity
	end

	def render_api_error(exception)
		render json: { errors: Array.new.push(exception.data) }, status: exception.status
	end

	def handle_standard_error(exception)
		class_name = exception.class.to_s
		error      = nil

		if (class_name[0..8] === "ApiErrors")
			return self.render_api_error(exception)
		end

		if (class_name === "ActiveRecord::RecordNotFound")
			error = ApiErrors::BaseError.new("Record not found", "The #{exception.model} identified by #{exception.id} could not be found", 404, 404)
		else
			error = ApiErrors::BaseError.new("Server error", exception.message, 500, 500)
		end

		self.render_api_error(error)
	end

	private
		def authenticate_request
			bearer = ParseBearerToken.call(data: request.headers).bearer

			@current_user = (bearer) ? User.where({ bearer: bearer }).first : false
			@authorized   = !!@current_user

			unless @authorized
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			session[:current_user] = @current_user
		end
end