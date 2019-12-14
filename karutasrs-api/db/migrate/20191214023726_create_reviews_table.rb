class CreateReviewsTable < ActiveRecord::Migration[6.0]
	def change
		create_table :reviews do |t|
			t.belongs_to :learned_item, null: false, foreign_key: true, index: true

			t.integer :wrong_total
			t.integer :wrong_kimariji
			t.integer :wrong_second_verse_answer

			t.timestamps
		end
	end
end
