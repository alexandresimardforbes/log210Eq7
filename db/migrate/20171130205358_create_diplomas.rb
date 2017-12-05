class CreateDiplomas < ActiveRecord::Migration[5.1]
  def change
    create_table :diplomas do |t|
      t.string :name
      t.string :date
      t.integer :user_id

      t.timestamps
    end
  end
end
