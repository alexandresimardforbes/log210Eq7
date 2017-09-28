class ApplicationController < ActionController::API
  require 'json_web_token'

  def hello
    render html: "Mission petit pont Laboratoire LOG210."

  end
end
