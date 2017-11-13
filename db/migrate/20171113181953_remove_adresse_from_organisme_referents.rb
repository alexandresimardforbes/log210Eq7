class RemoveAdresseFromOrganismeReferents < ActiveRecord::Migration[5.1]
  def change
    remove_column :organisme_referents, :adresse, :string
  end
end
