class CreateReadingLevels < ActiveRecord::Migration
  def change
    create_table :reading_levels do |t|
      t.string :level

      t.timestamps null: false
    end
  end
end
