class PointServicesController < ApplicationController
  before_action :fetch_point_service, only: %i[show update destroy create]

  # http: GET /point_service
  def index
    point_services = PointService.all
    json_response(point_services)
  end

  # http: GET /point_service/:id
  def show
    json_response(@current_point_service)
  end

  # http: POST /point_service
  def create
    new_point_service = PointService.new(point_service_params)
    if new_point_service.save
      json_response(new_point_service)
    else
      render json: { errors: new_point_service.errors }, status: :bad_request
    end
  end

  # http: PATCH /point_service/:id
  def update
    if @current_point_service.update_attributes(point_service_params)
      json_response(@current_point_service)
    else
      render json: { errors: @current_point_service.errors }, status: :bad_request
    end
  end

  # http: DELETE /point_service/:id
  def destroy
    if @current_point_service.destroy
      head 200
    else
      render json: { errors: @current_point_service.errors }, status: :bad_request
    end
  end

  private

  def fetch_point_service
    @current_point_service = PointService.find_by_id(params[:id])
  end

  def json_response(object, status = :ok)
    render json: object, status: status, except: %i[created_at
                                                    updated_at]
  end

  def point_service_params
    params.require(:point_service).permit(:nom, :telephone, :fax, :courriel,
                                      :no_civique, :rue, :ville, :province, :etat, :code_postal,:organisme_id)
  end
end
