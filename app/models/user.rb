class User < ApplicationRecord
  has_secure_password
  before_save :downcase_email
end

def downcase_email
  self.email = self.email.delete(' ').downcase
end
