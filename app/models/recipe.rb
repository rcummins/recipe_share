class Recipe < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :servings, presence: true

  belongs_to :author, foreign_key: :author_id, class_name: :User
end
