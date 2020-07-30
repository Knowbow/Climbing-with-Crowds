class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: ["Wrong-User-Controller"], status: 422
    end
  end

  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
