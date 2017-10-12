class UsersController < ApplicationController
  before_action :fetch_user, only: %i[show update destroy]

  # http: GET /users
  def index
    users = User.all
    json_response(users)
  end

  # http: GET /users/:id
  def show
    render json: @user, except: %i[password_digest created_at
                                    updated_at]
  end

  # http: POST /users
  def create
    user = User.new(user_params)
    if user.save
      render json: user, except: %i[password_digest created_at
                                    updated_at]
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end

  # http: PATCH /users/:id
  def update
    if @user.update_attributes(user_params)
      render json: @user, except: %i[password_digest created_at
                                     updated_at]
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
end
