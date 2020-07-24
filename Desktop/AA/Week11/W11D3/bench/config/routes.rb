Rails.application.routes.draw do
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: "json"} do 
    resource :user, only: [:create] #create new user
    resource :session, only: [:create, :destroy, :show] #login and logout sessions
  end

end
