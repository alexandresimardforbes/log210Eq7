class Organisme < ApplicationRecord
  has_many :point_services
  has_and_belongs_to_many :users
end
