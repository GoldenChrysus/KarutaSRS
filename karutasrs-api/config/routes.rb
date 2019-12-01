Rails.application.routes.draw do
	namespace "api" do
		get "users/:id/review_queue", to: "users#review_queue"

		jsonapi_resources :users
		jsonapi_resources :poems, only: [:index, :show]
		jsonapi_resources :learned_items
		# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	end
end