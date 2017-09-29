class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.save
      render json: {status: 'Un nouvel usager à été créé'}, status: :created
    else
      render json: {errors: user.errors.full_messages }, status: :bad_request
    end
  end
end

private

def user_params
  params.require(:user).permit(:email, :password, :password_confirmation,
                               :first_name, :last_name, :user_type)
end