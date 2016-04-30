class Request < ActiveRecord::Base
  belongs_to :requester, :foreign_key => :requester_id, class_name: 'User'
  belongs_to :owner, :foreign_key => :owner_id, class_name: 'User'
end
