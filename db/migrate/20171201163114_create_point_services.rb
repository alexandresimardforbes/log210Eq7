class CreatePointServices < ActiveRecord::Migration[5.1]
  def change
    create_table :point_services do |t|
      t.string :nom
      t.string :telephone
      t.string :fax
      t.string :courriel
      t.string :no_civique
      t.string :rue
      t.string :ville
      t.string :province
      t.string :etat
      t.string :code_postal
      t.belongs_to :organisme, index: true
      t.timestamps
    end
  end
end
