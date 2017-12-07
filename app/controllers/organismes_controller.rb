class OrganismesController < ApplicationController
  before_action :fetch_org, only: %i[show update destroy create]

  # http: GET /organisme
  def index
    organismes = Organisme.all.where(disable: false)
    json_response(organismes)
  end

  # http: GET /organisme/:id
  def show
    json_response(@current_org)
  end

  # http: POST /organisme
  def create
    new_organisme = Organisme.new(organisme_params)
    if new_organisme.save
      new_organisme.users << User.find_by_id(request.headers['Session-user-id'])
      json_response(new_organisme)
    else
      render json: { errors: new_organisme.errors }, status: :bad_request
    end
  end

  # http: PATCH /organisme/:id
  def update
    if @current_org.update_attributes(organisme_params)
      json_response(@current_org)
    else
      render json: { errors: @current_org.errors }, status: :bad_request
    end
  end

  # http: DELETE /organisme/:id
  def destroy
    if @current_org.destroy
      head 200
    else
      render json: { errors: @current_org.errors }, status: :bad_request
    end
  end

  private

  def fetch_org
    @current_org = Organisme.find_by_id(params[:id])
  end

  def json_response(object, status = :ok)
    render json: object,:include =>{:users => {}} ,status: status, except: %i[created_at
                                                    updated_at]
  end

  def organisme_params
    params.require(:organisme).permit(:nom, :telephone, :fax, :courriel,
                                              :no_civique, :rue, :ville, :province, :etat, :code_postal, :disable)
  end
end
