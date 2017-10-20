require 'test_helper'

class ReferentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @referent = referents(:one)
  end

  test "should get index" do
    get referents_url, as: :json
    assert_response :success
  end

  test "should create referent" do
    assert_difference('Referent.count') do
      post referents_url, params: { referent: { courriel: @referent.courriel, fax: @referent.fax, nom: @referent.nom, preference: @referent.preference, prenom: @referent.prenom, telephoneb: @referent.telephoneb, telephonec: @referent.telephonec, titre: @referent.titre } }, as: :json
    end

    assert_response 201
  end

  test "should show referent" do
    get referent_url(@referent), as: :json
    assert_response :success
  end

  test "should update referent" do
    patch referent_url(@referent), params: { referent: { courriel: @referent.courriel, fax: @referent.fax, nom: @referent.nom, preference: @referent.preference, prenom: @referent.prenom, telephoneb: @referent.telephoneb, telephonec: @referent.telephonec, titre: @referent.titre } }, as: :json
    assert_response 200
  end

  test "should destroy referent" do
    assert_difference('Referent.count', -1) do
      delete referent_url(@referent), as: :json
    end

    assert_response 204
  end
end
