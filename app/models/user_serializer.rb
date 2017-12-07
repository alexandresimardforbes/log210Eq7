class UserSerializer < BaseSerializer
  has_many :diplomas

  attributes :email,:password_digest,:first_name,:last_name,:user_type,:address,:phone_c,:phone_m,:phone_b,:disable,:getDiplomas
end