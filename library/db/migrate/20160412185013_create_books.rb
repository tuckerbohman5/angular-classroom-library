class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.integer :author_id
      t.integer :reading_level_id
      t.integer :teacher_id

      t.timestamps null: false
    end
  end
end
