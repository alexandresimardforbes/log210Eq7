class OrganismeReferentsController < ApplicationController

  # http: POST /users
  def create
    new_organisme_ref = OrganismeReferent.new(user_params)
    if new_organisme_ref.save
    else
      render json: { errors: new_organisme_ref.errors.full_messages }, status: :bad_request
    end
  end



  def user_params
    params.require(:organisme_referent).permit(:nom_organisme_ref, :adresse, :telephone,
                                               :telecopie, :courriel, :site_web, :disable)
  end

end
