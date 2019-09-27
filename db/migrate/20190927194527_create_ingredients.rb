class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id, null: false
      t.string :ingredient, null: false

      t.timestamps
    end

    add_foreign_key :ingredients, :recipes
    add_index :ingredients, :recipe_id
  end
end
