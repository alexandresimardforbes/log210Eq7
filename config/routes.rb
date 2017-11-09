Rails.application.routes.draw do
  resources :referents
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :update, :destroy, :index, :show]
  resources :organisme_referents, only: [:create, :update, :destroy, :index, :show]
  post 'authenticate', to: 'authentication#authenticate'
  end
