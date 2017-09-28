class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :fname
      t.string :lname
      t.string :password_digest
      t.string :email
      t.integer :typeUser

      t.timestamps
    end
  end
end
