class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email,  null: false
      t.string :password_digest, null:false
      t.string :first_name
      t.string :last_name
      t.integer :user_type
      t.string :address
      t.string :phone_c
      t.string :phone_m
      t.string :phone_b

      t.timestamps
    end
  end
end
