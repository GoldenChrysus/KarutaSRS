class CreatePoemNotes < ActiveRecord::Migration[6.0]
	def change
		create_table :poem_notes do |t|
			t.string :note

			t.belongs_to :user, null: false, foreign_key: true, index: true
			t.belongs_to :poem, null: false, foreign_key: true, index: true

			t.timestamps
		end

		add_index :poem_notes, [:user_id, :poem_id], :unique => true
	end
end
