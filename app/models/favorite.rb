class Favorite < ApplicationRecord
  validates :recipe_id, uniqueness: {
    scope: :user_id,
    message: "has already been added to this user's favorites"
  }

  belongs_to :recipe
  belongs_to :user
end
