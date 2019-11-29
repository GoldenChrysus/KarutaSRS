# spec/models/poem_spec.rb
require 'rails_helper'

# Test suite for the Poem model
RSpec.describe Poem, type: :model do
  # Validation tests
  # ensure relevant columns are present before saving
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:first_verse) }
  it { should validate_presence_of(:second_verse_raw) }
  it { should validate_presence_of(:second_verse_card) }
  it { should validate_presence_of(:second_verse_answer) }
  it { should validate_presence_of(:kimariji) }
end