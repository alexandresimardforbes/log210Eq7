class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: {error: 'Non authorisé'}, status: 401 unless @current_user
  end
end

def serialize_models(models, options = {})
  JSONAPI::Serializer.serialize(models, options.merge(is_collection: true))
end

def serialize_model(model, options = {})
  JSONAPI::Serializer.serialize(model, options)
end

# Consult http://jsonapi.org/format/#error-objects for more sophisticated responses.
def serialize_error(*error_objects)
  {
      errors: error_objects
  }
end
