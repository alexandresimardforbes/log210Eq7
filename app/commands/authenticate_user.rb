class AuthenticateUser
  prepend SimpleCommand
  logger = Logger.new("logAuth,log")

  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    JsonWebToken.encode(user_id: user.id) if user
  end

  private
  attr_accessor :email, :password

  def user
    datetime = DateTime.now.to_date
    logger = Logger.new("log/logAuth,log")
    user = User.find_by_email(email)
    return user if user && user.authenticate(password) && user.disable != true
      user.authTry += 1
    logger.info {"#{datetime} tentative echoué de #{user.email}"}
    if user.authTry > 2
      user.disable = true
      PasswordResetMailer.send_password_reset(user).deliver
      user.authTry = 0
    end

    user.save
    errors.add :user_authentication, 'Mauvais Nom dutilisateur ou mot de passe'
    nil
  end

end