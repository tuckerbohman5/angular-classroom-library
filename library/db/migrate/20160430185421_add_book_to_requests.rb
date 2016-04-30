class AddBookToRequests < ActiveRecord::Migration
  def change
    add_column :requests, :book_id, :integer
    add_column :requests, :checked_out, :boolean
  end
end
