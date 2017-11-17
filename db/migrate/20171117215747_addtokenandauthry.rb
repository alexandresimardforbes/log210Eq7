class Addtokenandauthry < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :authTry, :integer
    add_column :users, :activationToken, :string
  end
end
