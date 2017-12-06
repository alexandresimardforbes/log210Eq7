class CreateLocals < ActiveRecord::Migration[5.1]
  def change
    create_table :locals do |t|
      t.string :name
      t.integer :nbPlace
      t.string :typeService
      t.timestamps
    end
  end
end
