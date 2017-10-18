class CreateOrganismeReferents < ActiveRecord::Migration[5.1]
  def change
    create_table :organisme_referents do |t|
      t.String :nomOrganisation
      t.integer :noCivique
      t.String :rue
      t.String :ville
      t.String :province
      t.String :codePostal
      t.String :telephoneBureau
      t.String :telephoneTelecopieur
      t.String :courriel
      t.String :siteWeb

      t.timestamps
    end
  end
end
