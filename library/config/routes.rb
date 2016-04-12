Rails.application.routes.draw do
  namespace :api, defaults:{format: :json} do
    namespace :v1 do
      resources :teachers, :books, :authors, :grades, :reading_levels, :schools
    end
  end
end
