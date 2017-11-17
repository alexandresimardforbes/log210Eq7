class PasswordResetMailer < ActionMailer::Base
  default from: 'MissionPetitP@gmail.com'

  def send_password_reset(user)
    @user = user
    @url = "http://localhost:3000/authentication/#{@user.activationToken}/edit"
    mail(to: @user.email,
    subject: 'Password Maison Petit Pond',
         body: @url)
  end
end
