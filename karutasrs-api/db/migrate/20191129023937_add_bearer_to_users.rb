class AddBearerToUsers < ActiveRecord::Migration[6.0]
	def change
		add_column :users, :bearer, :string, null: false, unique: true
	end
end