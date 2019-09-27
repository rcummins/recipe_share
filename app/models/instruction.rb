class Instruction < ApplicationRecord
  validates :instruction, presence: true
  validates :step_number,
    presence: true,
    numericality: { only_integer: true, greater_than: 0 }

  belongs_to :recipe
end
