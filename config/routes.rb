Tictactoe::Application.routes.draw do
  resources :games
  resources :users
  resources :logins, only: [:new, :create, :destroy]
  
  root :to => 'logins#new'
end
