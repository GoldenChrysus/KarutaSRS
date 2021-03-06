module Api
	class PoemsController < ApplicationController
		skip_before_action :authenticate_request, only: [:index]

		def index
			unless (!params[:include])
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def show
			unless (!params[:include] && PoemPolicy.new(session[:current_user], params).show?)
				raise ApiErrors::AccessError::Forbidden.new
			end

			Poem.set_current_user(session[:current_user])

			process_request
		end

		def create
			unless PoemPolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def update
			unless PoemPolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def destroy
			unless PoemPolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def show_relationship
			unless PoemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def create_relationship
			unless PoemPolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def destroy_relationship
			unless PoemPolicy.new(session[:current_user], params).show_relationship?
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