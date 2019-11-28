class CreatePoems < ActiveRecord::Migration[6.0]
  def change
    create_table :poems do |t|
      t.string :name
      t.string :first_verse
      t.string :second_verse

      t.timestamps
    end
  end
end
