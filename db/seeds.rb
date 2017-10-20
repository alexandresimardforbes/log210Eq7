# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



    @userRoot = User.create(email: 'jacquepellerin@hotmail.com', password: 'Password', password_confirmation: 'Password',
                            first_name: 'Jacque', last_name: 'Pellerin', user_type: 1, disable: false)

    @userRoot.save



