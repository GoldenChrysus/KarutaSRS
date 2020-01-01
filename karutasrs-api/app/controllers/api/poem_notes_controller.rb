module Api
	class PoemNotesController < ApplicationController
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

			unless PoemNotePolicy.new(session[:current_user], tmp_params).show?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def show
			unless PoemNotePolicy.new(session[:current_user], params).show?
				raise ApiErrors::AccessError::Forbidden.new
			end
		end

		def update
			unless PoemNotePolicy.new(session[:current_user], params).show?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def destroy
			unless PoemNotePolicy.new(session[:current_user], params).destroy?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def show_relationship
			unless PoemNotePolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def create_relationship
			unless PoemNotePolicy.new(session[:current_user], params).show_relationship?
				raise ApiErrors::AccessError::Forbidden.new
			end

			process_request
		end

		def destroy_relationship
			unless PoemNotePolicy.new(session[:current_user], params).show_relationship?
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