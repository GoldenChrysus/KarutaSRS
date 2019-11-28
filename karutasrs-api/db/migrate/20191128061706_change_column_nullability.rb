class ChangeColumnNullability < ActiveRecord::Migration[6.0]
	def change
		change_column_null :learned_items, :level, false
		change_column_null :learned_items, :next_review, false
		change_column_null :poems, :name, false
		change_column_null :poems, :first_verse, false
		change_column_null :poems, :second_verse, false
		change_column_null :users, :email, false
		change_column_null :users, :password, false
	end
end
