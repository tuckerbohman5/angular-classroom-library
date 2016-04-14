class Book < ActiveRecord::Base
  belongs_to :author
  belongs_to :reading_level
  belongs_to :teacher


  def as_json(options = {})
    super(options.merge(include: [:author, :reading_level, :teacher]))
  end
end
