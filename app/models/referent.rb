class Referent < ApplicationRecord
  validates_uniqueness_of :email, case_sensitive: false
end
