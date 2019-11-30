# spec/models/user_spec.rb
require 'rails_helper'

# Test suite for the User model
RSpec.describe User, type: :model do
  # Validation tests
  # ensure relevant columns are present before saving
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }
end