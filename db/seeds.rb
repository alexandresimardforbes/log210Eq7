# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



    @userRootDirecteur = User.create(email: 'ad@a.com', password: 'Password', password_confirmation: 'Password',
                            first_name: 'Hubert', last_name: 'Joncacs', user_type: 1, disable: false)

    @userRootCoord = User.create(email: 'ac@a.com', password: 'Password', password_confirmation: 'Password',
                            first_name: 'Jacque', last_name: 'Pellerin', user_type: 2, disable: false)

    @userRootNormal = User.create(email: 'an@a.com', password: 'Password', password_confirmation: 'Password',
                                  first_name: 'Jacque', last_name: 'Pellerin', user_type: 2, disable: false)

    @organismeRe = OrganismeReferent.create(nom_organisme_ref: 'Mon psy amical,',telephone: '2345679765',
                                                       telecopie: '345654567',courriel: 'monpsy@gmaon.com',
                                                       site_web: 'monpsyamour.com',disable: false, no_civique: '1234',
                                                       rue: 'Fake street', ville: 'Springfield',province:'Ohie',
                                                       etat: 'Maine', code_postal: 'H0H0H0')

    @organismeRe = OrganismeReferent.create(nom_organisme_ref: 'Avocate sans frontiere',telephone: '2343479765',
                                                       telecopie: '345454567',courriel: 'avocatsans@gmaon.com',
                                                       site_web: 'avocatssans.com',disable: false, no_civique: '5555',
                                                       rue: 'Dolly street', ville: 'Montreal',province:'Quebec',
                                                       etat: 'Quebec', code_postal: 'H3F1A8')

    @organismeAlpha = Organisme.create(nom: 'Avocate sans frontiere',telephone: '2343479765',
                                            fax: '345454567',courriel: 'avocatsans@gmaon.com',
                                           disable: false, no_civique: '5555',
                                            rue: 'Dolly street', ville: 'Montreal',province:'Quebec',
                                            etat: 'Quebec', code_postal: 'H3F1A8')
