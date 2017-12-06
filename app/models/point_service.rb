class PointService < ApplicationRecord
  belongs_to :organisme
  has_many :local
end
