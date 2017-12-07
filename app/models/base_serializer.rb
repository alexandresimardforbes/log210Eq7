class BaseSerializer
  include JSONAPI::Serializer

  protected

  def relationship_self_link(attribute_name)
    nil
  end

  def self_link
    nil
  end

  def relationship_link(attribute_name)
    nil
  end
end