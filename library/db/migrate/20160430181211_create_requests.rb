class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :requester_id
      t.integer :owner_id
      t.boolean :approved, default: false
      t.timestamps null: false
    end
  end
end
