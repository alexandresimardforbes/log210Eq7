class CreateOrganismesUsersJoin < ActiveRecord::Migration[5.1]
  def change
    create_table :organismes_users, id: false do |t|
      t.integer :organisme_id
      t.integer :user_id
    end
  end
end
