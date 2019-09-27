class Ingredient < ApplicationRecord
  validates :ingredient, presence: true

  belongs_to :recipe
end
