class Book < ActiveRecord::Base
  belongs_to :author
  belongs_to :reading_level
  belongs_to :teacher
end
