class UsersController < ApplicationController
  before_action :fetch_user, only: %i[show update destroy create]
  skip_before_action :authenticate_request

  # http: GET /users
  def index
    users = User.all.where(disable: false)
    json_response(users)
  end

  # http: GET /users/:id
  def show
    json_response(@user)
  end

  # http: POST /users
  def create
    new_user = User.new(user_params)
      if new_user.save
        json_response(new_user)
      else
        render json: { errors: new_user.errors.full_messages }, status: :bad_request
      end
  end

  # http: PATCH /users/:id
  def update
    if @user.update_attributes(user_params)
      json_response(@user)
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end

  # http: DELETE /users/:id
  def destroy
    if @user.destroy
      head 200
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end

  private

  def fetch_user
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation,
                                 :first_name, :last_name, :user_type, :disable)
  end

  def json_response(object, status = :ok)
    render json: object, status: status, except: %i[password_digest created_at
                                                    updated_at]
  end

  def permission_to_create?(create_user_role)
    @session_user = User.find_by_id(request.headers['Session-user-id'])
    if @session_user.user_type == 'directeur'
      return true
    elsif @session_user.user_type == 'coordinateur' && create_user_role != 'directeur'
      return true
    else
      return false
    end
  end
end
