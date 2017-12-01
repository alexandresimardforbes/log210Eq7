class LocalsController < ApplicationController
  before_action :set_local, only: [:show, :update, :destroy]

  # GET /locals
  # GET /locals.json
  def index
    @locals = Local.all
  end

  # GET /locals/1
  # GET /locals/1.json
  def show
    json_response(@current_local)
  end

  # POST /locals
  # POST /locals.json
  def create
    @local = Local.new(local_params)

    if @local.save
      render :show, status: :created, location: @local
    else
      render json: @local.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locals/1
  # PATCH/PUT /locals/1.json
  def update
    if @local.update(local_params)
      render :show, status: :ok, location: @local
    else
      render json: @local.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locals/1
  # DELETE /locals/1.json
  def destroy
    @local.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_local
      @local = Local.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def local_params
      params.require(:local).permit(:name, :nbPlace, :typeService)
    end
end
