module Api
	class UsersController < ApplicationController
		def review_queue
			unless UserPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			user  = User.find(params[:id])
			items = (user != nil) ? user.review_queue : []

			render json: FormatJsonResult.call(data: items).result
		end

		def lesson_queue
			unless UserPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			user  = User.find(params[:id])
			items = (user != nil) ? user.lesson_queue : []

			render json: FormatJsonResult.call(data: items).result
		end

		def stats
			unless UserPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			user  = User.find(params[:id])
			stats = (params[:type] === "review") ? user.review_stats : user.dashboard_stats

			render json: FormatJsonResult.call(data: stats).result
		end

		def index
			raise ApiErrors::AuthenticationError::Unauthorized.new
		end

		def show
			unless UserPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def update
			unless UserPolicy.new(session[:current_user], params).show?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def destroy
			unless UserPolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def show_relationship
			unless UserPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def create_relationship
			unless UserPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AuthenticationError::Unauthorized.new
			end

			process_request
		end

		def destroy_relationship
			unless UserPolicy.new(session[:current_user], params).show_relationship?
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