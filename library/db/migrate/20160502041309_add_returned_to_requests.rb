class AddReturnedToRequests < ActiveRecord::Migration
  def change
    add_column :requests, :returned, :boolean, :default => false
  end
end
