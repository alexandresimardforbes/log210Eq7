# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171130211747) do

  create_table "diplomas", force: :cascade do |t|
    t.string "name"
    t.string "date"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
<<<<<<< HEAD
ActiveRecord::Schema.define(version: 20171201163114) do
=======
ActiveRecord::Schema.define(version: 20171201013028) do

  create_table "locals", force: :cascade do |t|
    t.string "name"
    t.integer "nbPlace"
    t.string "typeService"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
>>>>>>> CU08

  create_table "organisme_referents", force: :cascade do |t|
    t.string "nom_organisme_ref"
    t.string "telephone"
    t.string "telecopie"
    t.string "courriel"
    t.string "site_web"
    t.boolean "disable", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "no_civique"
    t.string "rue"
    t.string "ville"
    t.string "province"
    t.string "etat"
    t.string "code_postal"
  end

  create_table "organismes", force: :cascade do |t|
    t.string "nom"
    t.string "telephone"
    t.string "fax"
    t.string "courriel"
    t.string "no_civique"
    t.string "rue"
    t.string "ville"
    t.string "province"
    t.string "etat"
    t.string "code_postal"
    t.boolean "disable", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organismes_users", id: false, force: :cascade do |t|
    t.integer "organisme_id"
    t.integer "user_id"
  end

  create_table "point_services", force: :cascade do |t|
    t.string "nom"
    t.string "telephone"
    t.string "fax"
    t.string "courriel"
    t.string "no_civique"
    t.string "rue"
    t.string "ville"
    t.string "province"
    t.string "etat"
    t.string "code_postal"
    t.integer "organisme_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organisme_id"], name: "index_point_services_on_organisme_id"
  end

  create_table "referents", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "title"
    t.string "phone_c"
    t.string "phone_b"
    t.string "fax"
    t.string "email"
    t.boolean "preference_fax"
    t.boolean "preference_courriel"
    t.boolean "preference_papier"
    t.boolean "disable", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "organisme_referent_id"
    t.index ["organisme_referent_id"], name: "index_referents_on_organisme_referent_id"
  end

# Could not dump table "users" because of following StandardError
#   Unknown type 'bool' for column 'disable'

end
