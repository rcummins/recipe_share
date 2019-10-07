class AddItemNumberToIngredients < ActiveRecord::Migration[5.2]
  def change
    add_column :ingredients, :item_number, :integer, null: false
  end
end
