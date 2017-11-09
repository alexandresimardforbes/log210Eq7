class CreateReferents < ActiveRecord::Migration[5.1]
  def change
    create_table :referents do |t|
      t.string :first_name
      t.string :last_name
      t.string :title
      t.string :phone_c
      t.string :phone_b
      t.string :fax
      t.string :email
      t.boolean :preference_fax
      t.boolean :preference_courriel
      t.boolean :preference_papier
      t.boolean :disable, default: false

      t.timestamps
    end
  end
end
