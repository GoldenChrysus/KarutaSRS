class AddPoemKimariji < ActiveRecord::Migration[6.0]
	def change
		rename_column :poems, :second_verse, :second_verse_raw
		add_column :poems, :second_verse_card, :string, null: false
		add_column :poems, :kimariji, :string, null: false
	end
end