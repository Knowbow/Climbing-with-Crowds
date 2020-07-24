Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show, :create, :update, :destroy] do
    resources :artworks, only: [:index]
  end
  resources :artworks, only: [:show, :create, :update, :destroy]
  resources :artwork_shares, only: [:create, :destroy]
  
  #resources :users/:id/artworks, only: [:index]

  # get 'users/', to: 'users#index'
  # post 'users/', to: 'users#create'
  # get 'users/new', to: 'users#new'
  # get 'users/:id', to: 'users#edit'
  # get 'users/:id', to: 'users#show'
  # patch 'users/:id', to: 'users#update'
  # put 'users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'

end


# Prefix Verb   URI Pattern                                                                          Controller#Action
# users GET    /users(.:format)                                                                      users#index
#       POST   /users(.:format)                                                                      users#create
# users_new GET    /users/new(.:format)                                                              users#new
#       GET    /users/:id(.:format)                                                                  users#edit
#       GET    /users/:id(.:format)                                                                  users#show
#       PATCH  /users/:id(.:format)                                                                  users#update
#       PUT    /users/:id(.:format)                                                                  users#update
#       DELETE /users/:id(.:format)                                                                  users#destroy
# rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
# rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
# rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create