class LocalsController < ApplicationController
  before_action :fetch_local, only: %i[show update destroy create]

  # GET /locals
  # GET /locals.json
  def index
    local = Local.all
    json_response(local)
  end

  # GET /locals/:id
  def show
    json_response(@current_local)
  end

  # POST /locals

  def create
    new_local = Local.new(local_params)

    if new_local.save
      json_response(new_local)
    else
      render json: { errors: new_local.errors }, status: :bad_request
    end
  end

  # PATCH/PUT /locals/:id
  def update
    if @current_local.update_attributes(local_params)
      json_response(@current_local)
    else
      render json: { errors: @current_local.errors }, status: :bad_request
    end
  end

  # DELETE /locals/1
  # DELETE /locals/1.json
  def destroy
    if @current_local.destroy
      head 200
    else
      render json: { errors: @current_local.errors }, status: :bad_request
    end
  end

  private

  def fetch_local
    @current_local= Local.find_by_id(params[:id])
  end

  def json_response(object, status = :ok)
    render json: object, status: status, except: %i[created_at
                                                    updated_at]
  end
    # Never trust parameters from the scary internet, only allow the white list through.
    def local_params
      params.require(:local).permit(:name, :nbPlace, :typeService ,:id)
    end
end
