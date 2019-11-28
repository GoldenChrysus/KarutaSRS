class AddLevelInfoToLearnedItems < ActiveRecord::Migration[6.0]
	def change
		add_column :learned_items, :level, :integer
		add_column :learned_items, :next_review, :datetime
	end
end