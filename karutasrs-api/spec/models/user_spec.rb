# spec/models/user_spec.rb
require 'rails_helper'

# Test suite for the User model
RSpec.describe User, type: :model do
	# Validation tests
	# ensure relevant columns are present before saving
	it { should validate_presence_of(:email) }
	it { should validate_presence_of(:password) }

	# ensure email is case-insensitively unique
	subject {
		User.create(
			:email    : "test@test.com",
			:password : "1234"
		)
	}

	it { should validate_uniqueness_of(:email).case_insensitive }
end