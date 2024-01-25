Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # get "/contact", to: "pages#contact"
  get "/about", to: "pages#about"
  get "/dashboard", to: "pages#dashboard"
  get "/contact", to: "pages#contact"
  get "/books", to: "pages#books"

  resources :illustrations, except: :show
end
