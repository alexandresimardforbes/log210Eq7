class AddAdresseAttributeToOrganismeReferents < ActiveRecord::Migration[5.1]
  def change
    add_column :organisme_referents, :no_civique, :string
    add_column :organisme_referents, :rue, :string
    add_column :organisme_referents, :ville, :string
    add_column :organisme_referents, :province, :string
    add_column :organisme_referents, :etat, :string
    add_column :organisme_referents, :code_postal, :string
  end
end
