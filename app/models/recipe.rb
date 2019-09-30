class Recipe < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :servings,
    presence: true,
    numericality: { only_integer: true, greater_than: 0 }

  belongs_to :author, foreign_key: :author_id, class_name: :User
  has_many :ingredients, dependent: :destroy
  has_many :instructions, dependent: :destroy
end
