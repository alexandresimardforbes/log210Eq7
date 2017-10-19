
class  AuthenticationController < ApplicationController
  skip_before_action :authenticate_request


  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])


    if command.success?
      render json: {auth_token: command.result , userid: @current_user.__id__}

    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end