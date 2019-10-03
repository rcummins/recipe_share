Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :recipes, only: [:index, :create, :show, :update, :destroy]
    resources :ingredients, only: [:create, :update, :destroy]
    resources :instructions, only: [:create, :update, :destroy]
  end
end
