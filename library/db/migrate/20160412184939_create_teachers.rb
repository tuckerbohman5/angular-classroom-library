class CreateTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.string :title
      t.string :first_name
      t.string :last_name
      t.integer :grade_id
      t.integer :school_id
      t.string :email
      t.string :password_digest

      t.timestamps null: false
    end
  end
end
