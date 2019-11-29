class AddSecondVerseAnswerToPoem < ActiveRecord::Migration[6.0]
	def change
		add_column :poems, :second_verse_answer, :string, null: false
	end
end