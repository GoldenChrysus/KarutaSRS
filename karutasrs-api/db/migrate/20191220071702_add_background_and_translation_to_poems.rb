class AddBackgroundAndTranslationToPoems < ActiveRecord::Migration[6.0]
	def change
		add_column :poems, :translation, :string, null: false
		add_column :poems, :background, :string, null: false
	end
end
