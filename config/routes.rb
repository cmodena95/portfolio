Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  get "/admin", to: "pages#admin"

  resources :illustrations, except: :show
end