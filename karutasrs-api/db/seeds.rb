# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
poems = Poem.create([
	{
		id: 17,
		name: "17",
		first_verse: "First V",
		second_verse: "Second V"
	},
	{
		name: "18",
		first_verse: "First V",
		second_verse: "Second V"
	}
]);