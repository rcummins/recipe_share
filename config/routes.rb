Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :recipes, only: [:index, :create, :update, :destroy]
    resources :ingredients, only: [:create, :destroy]
    resources :instructions, only: [:create, :destroy]
    resources :ratings, only: [:create]
    resources :favorites, only: [:index, :create, :destroy]
  end
end
