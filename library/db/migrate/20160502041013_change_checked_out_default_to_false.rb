class ChangeCheckedOutDefaultToFalse < ActiveRecord::Migration
  def change
    change_column :requests, :checked_out, :boolean, :default => false
  end
end
