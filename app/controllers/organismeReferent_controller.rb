class OrganismeReferentsController < ApplicationController
  before_action :fetch_user, only: %i[show update destroy create]

  # http: GET /OrganismeReferents
  def index
    organismes = OrganismeReferent.all.where(disable: false)
    json_response(organismes)
  end
  # http: GET /OrganismeReferents/:id
  def show
    json_response(@organismes)
  end
# http POST /OrganismeReferents
  def create
    new_organisme = OrganismeReferent.new(organisme_param)
    if permission_to_create?(new_user.user_type)
      if new_organisme.save
        json_response(new_organisme)
      else
        render json: { errors: new_organisme.errors.full_messages }, status: :bad_request
      end
    else
      render json: { errors: 'Vous n''avez pas les droits pour créer un organisme referent' }, status: :bad_request
    end
  end

  def update
    if @organisme.update_attributes(organisme_param)
      json_response(@organisme)
    else
      render json: { errors: @user.errors.full_messages }, status: :bad_request
    end
  end

  def fetch_user
    @user = User.find_by_id(params[:id])
  end

  def organisme_param
    params.require(:organisme).permit(:nomOrganisation, :noCivique, :rue,
                                      :ville, :province, :codePostal, :telephoneBureau,
                                      :telephoneTelecopieur, :courriel, :siteWeb)
  end

  def json_response(object, status= :ok)
    render json: object, status: status
  end

  def permission_to_create?(create_user_role)
    @session_user = User.find_by_id(request.headers['Session-user-id'])
    if @session_user.user_type == 'coordinateur'
      return true
    elsif @session_user.user_type == 'directeur' && create_user_role != 'directeur'
      return true
    else
      return false
    end
  end
end