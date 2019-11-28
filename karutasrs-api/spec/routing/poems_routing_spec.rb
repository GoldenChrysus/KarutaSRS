require "rails_helper"

api_path = ENV["api_path"]

RSpec.describe Api::PoemsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "#{api_path}/poems").to route_to("api/poems#index")
    end

    it "routes to #show" do
      expect(:get => "#{api_path}/poems/1").to route_to("api/poems#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "#{api_path}/poems").to route_to("api/poems#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "#{api_path}/poems/1").to route_to("api/poems#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "#{api_path}/poems/1").to route_to("api/poems#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "#{api_path}/poems/1").to route_to("api/poems#destroy", :id => "1")
    end
  end
end
