require 'byebug'
class UsersController < ApplicationController
    
    def index
        if params[:id] 
          @user = User.find(params[:id])
        else 
          @users = User.all 
        end 
        render json: @users 
      end

    def show # maps to for :id 
        render json: params
    end

    def create
        
        @user = User.new(user_params)
        # replace the `user_attributes_here` with the actual attribute keys
        if @user.save 
            render json: @user
        else 
            render json: @user.errors.full_messages, status: 422 
        end
    end

    def show 
        @user = User.find(params[:id])
        render json: @user 
    end

    
    def update
        @user = User.find(params[:id])
        if @user.update(user_params) 
 
            render json: @user
        else
          render json: @user.errors.full_messages, status: 422
        end
      end
    
      def destroy
        @user = User.find(params[:id])
        @user.destroy 
        render json: @user
      end

private 

    def user_params # strong params, only allow users to set what we allow
        params.require(:user).permit(:name, :email)
          # params will require top level key of :laugh, it will allow nested key of :body
    end

end

