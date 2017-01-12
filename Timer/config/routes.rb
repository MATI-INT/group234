Rails.application.routes.draw do
  resources :comments
  get '/get_script', to: 'pages#get_script'
  root to: 'timers#index'
end
