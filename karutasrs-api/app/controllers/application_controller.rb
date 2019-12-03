class ApplicationController < JSONAPI::ResourceController
	include Pundit

	protect_from_forgery with: :null_session

	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
	rescue_from ApiErrors::BaseError, with: :render_api_error
	rescue_from StandardError, with: :handle_standard_error

	def render_unprocessable_entity_response(exception)
		render json: exception.record.errors, status: :unprocessable_entity
	end

	def render_not_found_response(exception)
		data = {
			:title  => "Record not found",
			:detail => "The #{exception.model} identified by #{exception.id} could not be found",
			:code   => 404,
			:status => 404
		}

		render json: { errors: Array.new.push(data) }, status: :not_found
	end

	def render_api_error(exception)
		render json: { errors: Array.new.push(exception.data) }, status: exception.code
	end

	def handle_standard_error(exception)
		if (exception.class.to_s[0..8] === "ApiErrors")
			self.render_api_error(exception)
		else
			error = ApiErrors::BaseError.new("Server error", exception.message, 500)

			self.render_api_error(error)
		end
	end
end