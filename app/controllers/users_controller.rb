class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    if current_user
      redirect_to(:new_game)
    else
      @user = User.new
    end
  end

  def create
    @user = User.new(params[:user])
    
    if @user.save
      session[:user_id] = @user.id
      
      redirect_to(:new_game)
    else
      render "new"
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
