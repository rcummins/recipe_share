class Recipe < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :servings,
    presence: true,
    numericality: { only_integer: true, greater_than: 0 }

  belongs_to :author, foreign_key: :author_id, class_name: :User
  has_many :ingredients, dependent: :destroy
  has_many :instructions, dependent: :destroy

  def update_average_ratings
    self.average_taste_rating =
      Rating.where(recipe_id: self.id).average(:taste_rating)

    self.average_effort_rating =
      Rating.where(recipe_id: self.id).average(:effort_rating)

    self.save
  end
end
