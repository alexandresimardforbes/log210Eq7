class AddOrganismeReferentIdToReferent < ActiveRecord::Migration[5.1]
  def change
    add_reference :referents, :organisme_referent, foreign_key: true, index: true
  end
end
