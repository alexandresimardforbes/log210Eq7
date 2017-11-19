class Referent < ApplicationRecord
  validates_uniqueness_of :email, case_sensitive: false
  belongs_to :organisme_referent
  accepts_nested_attributes_for :organisme_referent
end
