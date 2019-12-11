module Api
	class LearnedItemsController < ApplicationController
		def complete_review
			unless LearnedItemPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			item_id       = params[:id]
			parsed_data   = JSON.parse(request.raw_post)
			wrong_answers = parsed_data["wrong_answers"]
			item          = LearnedItem.find(item_id)
			result        = item.complete_review(wrong_answers)

			render json: FormatJsonResult.call(data: result).result
		end

		def index
			raise ApiErrors::AuthenticationError::Unauthorized.new
		end

		def show
			unless LearnedItemPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def update
			unless LearnedItemPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def destroy
			unless LearnedItemPolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def show_relationship
			unless LearnedItemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def create_relationship
			unless LearnedItemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def destroy_relationship
			unless LearnedItemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def show_related_resource
			policy = GetRelatedResourcePolicy.call(data: params).policy

			unless policy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def index_related_resources
			policy = GetRelatedResourcePolicy.call(data: params).policy

			unless policy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def get_related_resources
			policy = GetRelatedResourcePolicy.call(data: params).policy

			unless policy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end
	end
end