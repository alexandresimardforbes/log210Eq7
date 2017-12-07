class UsersController < ApplicationController
  before_action :fetch_user, only: %i[show update destroy create]


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
    if permission_to_create?(new_user.user_type)
      if new_user.save
        if !params[:user][:organisme_id].nil?
        new_user.organismes << Organisme.find(params[:user][:organisme_id])
        end
        json_response(new_user)
      else
        render json: { errors: new_user.errors }, status: :bad_request
      end
    else
      render json: { errors: "L'utilisateur n'a pas les droits requis pour la création de ce rôle."}, status: :bad_request
    end
  end

  # http: PATCH /users/:id
  def update
    if @user.update_attributes(user_params)
      json_response(@user)
    else
      render json: { errors: @user.errors }, status: :bad_request
    end
  end

  # http: DELETE /users/:id
  def destroy
    if @user.destroy
      head 200
    else
      render json: { errors: @user.errors }, status: :bad_request
    end
  end

  private

  def fetch_user
    @user = User.find_by_id(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation,
                                 :first_name, :last_name, :user_type, :disable,
                                 :address, :phone_c, :phone_m,
                                 :phone_b, diplomas_attributes: [  :name, :date ])
  end

  def json_response(object, status = :ok)
    render json: object,:include =>{:diplomas => {},:organismes => {}} ,status: status, except: %i[password_digest created_at
                                                    updated_at]
  end

  def permission_to_create?(create_user_role)
    @session_user = User.find_by_id(request.headers['Session-user-id'])
    if @session_user.user_type == 1
      return true
    elsif @session_user.user_type == 2 && create_user_role != 1
      return true
    else
      return false
    end
  end
end
