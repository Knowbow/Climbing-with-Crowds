class UsersController < ApplicationController

    def index
        @user = User.all 
        render :new
    end

    def show
        render :show
    end

    def create
        @user = User.new(user_params)
    
        if @user.save

        else

        end
    end

    def user_params
        params.require(:user).permit(:email, :password)
    end
end