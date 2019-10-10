class Rating < ApplicationRecord
  validates :recipe_id, uniqueness: {
    scope: :author_id,
    message: 'has already been rated by this user'
  }
  validates :taste_rating, :effort_rating, presence: true

  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :recipe
end
