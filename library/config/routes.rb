Rails.application.routes.draw do

  devise_for :users
  root "application#index"

  
  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :teachers, :books, :authors, :grades, :reading_levels, :schools, :users
    end
  end
end
