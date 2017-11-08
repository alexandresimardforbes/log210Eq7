class OrganismeReferentsController < ApplicationController
  before_action :fetch_org_ref, only: %i[show update destroy create]

  # http: GET /organisme_referents
  def index
    organismes_refs = OrganismeReferent.all.where(disable: false)
    json_response(organismes_refs)
  end

  # http: GET /organisme_referents/:id
  def show
    json_response(@current_org_ref)
  end

  # http: POST /organisme_referents
  def create
    new_organisme_ref = OrganismeReferent.new(organisme_params)
    if new_organisme_ref.save
      json_response(new_organisme_ref)
    else
      render json: { errors: new_organisme_ref.errors.full_messages }, status: :bad_request
    end
  end

  # http: PATCH /organisme_referents/:id
  def update
    if @current_org_ref.update_attributes(organisme_params)
      json_response(@current_org_ref)
    else
      render json: { errors: @current_org_ref.errors.full_messages }, status: :bad_request
    end
  end

  # http: DELETE /organisme_referents/:id
  def destroy
    if @current_org_ref.destroy
      head 200
    else
      render json: { errors: @current_org_ref.errors.full_messages }, status: :bad_request
    end
  end

  private

  def fetch_org_ref
    @current_org_ref = OrganismeReferent.find_by_id(params[:id])
  end

  def json_response(object, status = :ok)
    render json: object, status: status, except: %i[created_at
                                                    updated_at]
  end

  def organisme_params
    params.require(:organisme_referent).permit(:nom_organisme_ref, :adresse, :telephone,
                                               :telecopie, :courriel, :site_web, :disable)
  end
end
