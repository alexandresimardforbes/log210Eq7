class User < ApplicationRecord
  before_create :activation_token
  has_secure_password
  validates_presence_of :email
  validates_uniqueness_of :email, case_sensitive: false
  validates_format_of :email, with: /@/
  private
  def activation_token
    if self.activationToken.blank?
      self.activationToken = SecureRandom.urlsafe_base64.to_s
    end
  end
end
