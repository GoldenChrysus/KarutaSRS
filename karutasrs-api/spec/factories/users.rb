# spec/factories/users.rb
FactoryBot.define do
	factory :user do
		email { Faker::Internet.email }
		password { Faker::Internet.password }
		bearer { Faker::Alphanumeric.alphanumeric 32 }
	end
end