class Api::SessionsController < ApplicationController

    before_action :ensure_logged_in, only:[:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ['Invalid Username and/or Password'], status: 401
        end
    end

    def destroy
        logout!
        render json: {}
    end
end
