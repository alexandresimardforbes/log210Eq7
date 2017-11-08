
class  AuthenticationController < ApplicationController
  skip_before_action :authenticate_request


  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])
    userid = User.find_by_email(params[:email]).id

    if command.success?
      render json: {auth_token: command.result , userid: userid}
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end