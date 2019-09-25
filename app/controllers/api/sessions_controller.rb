class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render json: ["Sorry, that username or password was not correct"],
        status: :unauthorized
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    logout!
    render json: { message: "You are now logged out" }
  end
end
