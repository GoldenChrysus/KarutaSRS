class ApplicationController < JSONAPI::ResourceController
	include Pundit

	protect_from_forgery with: :null_session

	rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
	rescue_from ApiErrors::BaseError, with: :render_api_error
	rescue_from StandardError, with: :handle_standard_error

	def render_unprocessable_entity_response(exception)
		render json: exception.record.errors, status: :unprocessable_entity
	end

	def render_api_error(exception)
		render json: { errors: Array.new.push(exception.data) }, status: exception.code
	end

	def handle_standard_error(exception)
		class_name = exception.class.to_s

		if (class_name[0..8] === "ApiErrors")
			self.render_api_error(exception)
		elsif (class_name === "ActiveRecord::RecordNotFound")
			error = ApiErrors::BaseError.new("Record not found", "The #{exception.model} identified by #{exception.id} could not be found", 404)

			self.render_api_error(error)
		else
			error = ApiErrors::BaseError.new("Server error", exception.message, 500)

			self.render_api_error(error)
		end
	end
end