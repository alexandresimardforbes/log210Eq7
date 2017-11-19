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

    @organismeReferentAlpha = OrganismeReferent.create(nom_organisme_ref: 'Mon psy amical,',telephone: '2345679765',
                                                       telecopie: '345654567',courriel: 'monpsy@gmaon.com',
                                                       site_web: 'monpsyamour.com',disable: false, no_civique: '1234',
                                                       rue: 'Fake street', ville: 'Springfield',province:'Ohie',
                                                       etat: 'Maine', code_postal: 'H0H0H0')

    @organismeReferentOmega = OrganismeReferent.create(nom_organisme_ref: 'Avocate sans frontiere',telephone: '2343479765',
                                                       telecopie: '345454567',courriel: 'avocatsans@gmaon.com',
                                                       site_web: 'avocatssans.com',disable: false, no_civique: '5555',
                                                       rue: 'Dolly street', ville: 'Montreal',province:'Quebec',
                                                       etat: 'Quebec', code_postal: 'H3F1A8')

    @referentPremier = Referent.create(first_name: 'Marc',last_name: 'Lavoie',title:'infirmier',phone_c:'3244234',
                                       phone_b:'7672625',fax:'56789089', email:'marcl@ghot.com',preference_fax: true, preference_courriel: false, preference_papier: false,
                                       organisme_referent_id:'1')

    @referentDeuxième = Referent.create(first_name: 'Alain',last_name: 'Coté',title:'Psycologue',phone_c:'111111',
                                       phone_b:'2222222',fax:'9999999', email:'alianCote@ghot.com',preference_fax: true, preference_courriel: false, preference_papier: false,
                                       organisme_referent_id:'2')

    @referentQuatrieme = Referent.create(first_name: 'Gilbert',last_name: 'Caron',title:'Coclown',phone_c:'56746r784',
                                       phone_b:'7873487',fax:'46784', email:'GilbC@ghot.com',preference_fax: true, preference_courriel: false, preference_papier: false,
                                       organisme_referent_id:'1')

    @referentTroisieme = Referent.create(first_name: 'Sacha',last_name: 'Rozon',title:'Mascotte',phone_c:'6666666',
                                        phone_b:'7777777',fax:'8888888', email:'sachacote@ghot.com',preference_fax: true, preference_courriel: false, preference_papier: false,
                                        organisme_referent_id:'1')

    @organismeAlpha = Organisme.create(nom: 'Les amis d''entraide',telephone: '1111111111',
                                            fax: '2222222',courriel: 'amientre@gmaon.com',
                                           disable: false, no_civique: '3421',
                                            rue: 'Atwater street', ville: 'Montreal',province:'Quebec',
                                            etat: 'Quebec', code_postal: 'I3F6A8')

