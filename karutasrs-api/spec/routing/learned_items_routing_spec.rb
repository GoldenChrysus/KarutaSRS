require "rails_helper"

api_path = ENV["api_path"]

RSpec.describe Api::LearnedItemsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "#{api_path}/learned-items").to route_to("api/learned_items#index")
    end

    it "routes to #show" do
      expect(:get => "#{api_path}/learned-items/1").to route_to("api/learned_items#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "#{api_path}/learned-items").to route_to("api/learned_items#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "#{api_path}/learned-items/1").to route_to("api/learned_items#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "#{api_path}/learned-items/1").to route_to("api/learned_items#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "#{api_path}/learned-items/1").to route_to("api/learned_items#destroy", :id => "1")
    end
  end
end
