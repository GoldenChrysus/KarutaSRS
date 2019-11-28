# spec/factories/poems.rb
FactoryBot.define do
	factory :poem do
		name { Faker::Alphanumeric.alphanumeric 32 }
		first_verse { Faker::Alphanumeric.alphanumeric 32 }
		second_verse { Faker::Alphanumeric.alphanumeric 32 }
	end
end