# spec/factories/poems.rb
FactoryBot.define do
	factory :poem do
		name { Faker::Alphanumeric.alphanumeric 32 }
		first_verse { Faker::Alphanumeric.alphanumeric 32 }
		second_verse_raw { Faker::Alphanumeric.alphanumeric 32 }
		second_verse_card { Faker::Alphanumeric.alphanumeric 32 }
		second_verse_answer { Faker::Alphanumeric.alphanumeric 32 }
	end
end