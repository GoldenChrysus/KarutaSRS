class ChangeColumnNullability < ActiveRecord::Migration[6.0]
	def change
		change_column_null :learned_items, :level, false
		change_column_null :learned_items, :next_review, false
	end
end
