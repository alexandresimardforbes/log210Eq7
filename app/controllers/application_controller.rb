class ApplicationController < ActionController::API
  def hello
    render html: "Mission petit pont Laboratoire LOG210."
  end
end
