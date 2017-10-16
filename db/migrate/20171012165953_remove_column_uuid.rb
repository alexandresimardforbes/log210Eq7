class RemoveColumnUuid < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :uuid
  end
end
