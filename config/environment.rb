# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

ActionMailer::Base.smtp_settings = {
    :user_name => 'MissionPetitP@gmail.com',
    :password => 'Lo31Ki21Ju11',
    :domain => 'gmail.com',
    :address => 'smtp.gmail.com',
    :port => 587,
    :authentication => "plain",
    :enable_starttls_auto => true
}