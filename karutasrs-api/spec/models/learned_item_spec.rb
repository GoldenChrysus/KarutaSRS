# spec/models/learned_item_spec.rb
require 'rails_helper'

# Test suite for the LearnedItem model
RSpec.describe LearnedItem, type: :model do
  # Validation tests
  # ensure relevant columns are present before saving
  it { should validate_presence_of(:user) }
  it { should validate_presence_of(:poem) }
end