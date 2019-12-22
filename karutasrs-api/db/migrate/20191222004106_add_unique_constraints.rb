class AddUniqueConstraints < ActiveRecord::Migration[6.0]
	def change
		add_index :learned_items, [:user_id, :poem_id], :unique => true
		add_index :users, :email, :unique => true
	end
end
