class OrganismeReferent < ApplicationRecord
  validates_presence_of :nomOrganisme
  validates_uniqueness_of :nomOrganisme, case_sensitive: false
  validates_format_of :Courriel, with: /@/
end
