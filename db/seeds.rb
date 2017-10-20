# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

case Rails.env
  when "production"
    @userRoot = User.create(email: 'jacquepellerin@hotmail.com', password: 'Password', password_confirmation: 'Password',
                            first_name: 'Jacque', last_name: 'Pellerin', user_type: 'directeur', disable: false)

    @userRoot.save
end


