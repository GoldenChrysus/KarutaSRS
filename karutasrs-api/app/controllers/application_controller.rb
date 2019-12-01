class ApplicationController < JSONAPI::ResourceController
	include Pundit

	protect_from_forgery with: :null_session
end