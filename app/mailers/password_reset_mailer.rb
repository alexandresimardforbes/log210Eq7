class PasswordResetMailer < ActionMailer::Base
  default from: 'MissionPetitP@gmail.com'

  def send_password_reset(user)
    @user = user
    @url = "https://lab210eq7.herokuapp.com/authentication/#{@user.activationToken}/edit"
    mail(to: @user.email,
    subject: 'Password Maison Petit Pond',
         body: @url)
  end
end
