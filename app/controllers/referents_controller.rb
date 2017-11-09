class ReferentsController < ApplicationController
  before_action :set_referent, only: [:show, :update, :destroy]

  # GET /referents
  # GET /referents.json
  def index
    @referents = Referent.all
  end

  # GET /referents/1
  # GET /referents/1.json
  def show
  end

  # POST /referents
  # POST /referents.json
  def create
    @referent = Referent.new(referent_params)

    if @referent.save
      render :show, status: :created, location: @referent
    else
      render json: { errors: @referent.errors}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /referents/1
  # PATCH/PUT /referents/1.json
  def update
    if @referent.update(referent_params)
      render :show, status: :ok, location: @referent
    else
      render json: { errors: @referent.errors}, status: :unprocessable_entity
    end
  end

  # DELETE /referents/1
  # DELETE /referents/1.json
  def destroy
    @referent.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_referent
      @referent = Referent.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def referent_params
      params.require(:referent).permit(:first_name, :last_name, :title, :phone_c, :phone_b, :fax, :email, :preference_fax, :preference_courriel, :preference_papier, :disable)
    end
end
