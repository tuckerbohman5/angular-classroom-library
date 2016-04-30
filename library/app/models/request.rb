class Request < ActiveRecord::Base
  belongs_to :requester, :foreign_key => :requester_id, class_name: 'User'
  belongs_to :owner, :foreign_key => :owner_id, class_name: 'User'
  belongs_to :book

  def as_json(options = {})
    super(options.merge(include: [:requester, :owner, :book]))
  end
end
