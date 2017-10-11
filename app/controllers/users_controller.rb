class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render json: user, except: %i[password_digest created_at
                                    uuid updated_at]
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  def update
    fetch_user
    if @user.update_attributes(user_params)
      render json: @user, except: %i[password_digest created_at
                                     uuid updated_at]
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    fetch_user
    if @user.destroy
      head 200
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end

  def fetch_user
    @user = User.find_by_id(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation,
                                 :first_name, :last_name, :user_type)
  end
end
