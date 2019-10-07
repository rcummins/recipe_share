class Ingredient < ApplicationRecord
  validates :ingredient, presence: true
  validates :item_number,
    presence: true,
    numericality: { only_integer: true, greater_than: 0 }

  belongs_to :recipe
end
