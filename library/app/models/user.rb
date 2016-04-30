class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :books
  belongs_to :school
  belongs_to :grade

  has_many :requests, :foreign_key => :requester_id

  def as_json(options = {})
    super(options.merge(include: [:school, :grade, :books]))
  end
end
