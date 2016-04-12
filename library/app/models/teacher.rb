class Teacher < ActiveRecord::Base
  has_secure_password
  belongs_to :school
  belongs_to :grade
  has_many :books
end
