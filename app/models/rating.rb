class Rating < ApplicationRecord
  validates :taste_rating, :effort_rating,
    presence: true,
    numericality: {
      only_integer: true,
      greater_than_or_equal_to: 1,
      less_than_or_equal_to: 5
    }

  belongs_to :author, foreign_key: :author_id, class_name: :User
  belongs_to :recipe
end
