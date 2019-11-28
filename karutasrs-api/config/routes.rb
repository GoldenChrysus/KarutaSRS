Rails.application.routes.draw do
	namespace "api" do
		jsonapi_resources :users
		jsonapi_resources :poems, only: [:index, :show]
		jsonapi_resources :learned_items
		# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	end
end