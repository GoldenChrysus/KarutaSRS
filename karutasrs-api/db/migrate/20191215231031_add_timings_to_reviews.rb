class AddTimingsToReviews < ActiveRecord::Migration[6.0]
	def change
		add_column :reviews, :average_correct_time, :integer, null: false, :default => 0
		add_column :reviews, :average_total_time, :integer, null: false, :default => 0
	end
end
