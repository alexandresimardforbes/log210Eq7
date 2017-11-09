json.extract! referent, :id, :first_name, :last_name, :title, :phone_c, :phone_b, :fax, :email, :preference_fax, :preference_courriel, :preference_papier, :disable, :created_at, :updated_at
json.url referent_url(referent, format: :json)
