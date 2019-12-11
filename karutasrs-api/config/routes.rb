Rails.application.routes.draw do
	root to: proc { [404, {}, ["Not found."]] }

	namespace "api" do
		get "users/:id/review-queue", to: "users#review_queue"
		get "users/:id/lesson-queue", to: "users#lesson_queue"
		post "learned-items/:id/complete-review", to: "learned_items#complete_review"
		post "sessions/authenticate", to: "sessions#authenticate"

		jsonapi_resources :users
		jsonapi_resources :poems, only: [:index, :show]
		jsonapi_resources :learned_items
		# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	end
end