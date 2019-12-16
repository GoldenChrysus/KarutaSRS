module Api
	class LearnedItemsController < ApplicationController
		def complete_review
			unless LearnedItemPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AccessError::Forbidden.new
			end

			item_id     = params[:id]
			parsed_data = JSON.parse(request.raw_post)
			item        = LearnedItem.find(item_id)
			result      = item.complete_review(parsed_data)

			render json: FormatJsonResult.call(data: result).result
		end

		def index
			raise ApiErrors::AccessError::Forbidden.new
		end

		def create
			tmp_params = {
				:id => 0
			}

			if (params[:data] && params[:data][:relationships] && params[:data][:relationships] && params[:data][:relationships][:user][:data])
				tmp_params[:id] = params[:data][:relationships][:user][:data][:id]
			end

			unless UserPolicy.new(session[:current_user], tmp_params).show?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def show
			unless LearnedItemPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def update
			unless LearnedItemPolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def destroy
			unless LearnedItemPolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def show_relationship
			unless LearnedItemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def create_relationship
			unless LearnedItemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def destroy_relationship
			unless LearnedItemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def show_related_resource
			policy = GetRelatedResourcePolicy.call(data: params).policy

			unless policy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def index_related_resources
			policy = GetRelatedResourcePolicy.call(data: params).policy

			unless policy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def get_related_resources
			policy = GetRelatedResourcePolicy.call(data: params).policy

			unless policy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end
	end
end