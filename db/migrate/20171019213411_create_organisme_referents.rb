class CreateOrganismeReferents < ActiveRecord::Migration[5.1]
  def change
    create_table :organisme_referents do |t|
      t.string :nom_organisme_ref
      t.string :adresse
      t.string :telephone
      t.string :telecopie
      t.string :courriel
      t.string :site_web
      t.boolean :disable, default: false
      t.timestamps
    end
  end
end
