class CreateLearnedItems < ActiveRecord::Migration[6.0]
  def change
    create_table :learned_items do |t|
      t.belongs_to :user, null: false, foreign_key: true, index: true
      t.belongs_to :poem, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
