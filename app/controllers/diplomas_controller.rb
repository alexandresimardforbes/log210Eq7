class DiplomasController < ApplicationController
  before_action :set_diploma, only: [:show, :update, :destroy]

  # GET /diplomas
  # GET /diplomas.json
  def index
    @diplomas = Diploma.all
  end

  # GET /diplomas/1
  # GET /diplomas/1.json
  def show
  end

  # POST /diplomas
  # POST /diplomas.json
  def create
    @diploma = Diploma.new(diploma_params)

    if @diploma.save
      render :show, status: :created, location: @diploma
    else
      render json: @diploma.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /diplomas/1
  # PATCH/PUT /diplomas/1.json
  def update
    if @diploma.update(diploma_params)
      render :show, status: :ok, location: @diploma
    else
      render json: @diploma.errors, status: :unprocessable_entity
    end
  end

  # DELETE /diplomas/1
  # DELETE /diplomas/1.json
  def destroy
    @diploma.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diploma
      @diploma = Diploma.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def diploma_params
      params.require(:diploma).permit(:name, :date, :user_id)
    end
end
