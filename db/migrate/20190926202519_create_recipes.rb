class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.integer :servings, null: false
      t.decimal :average_taste_rating, default: 0
      t.decimal :average_effort_rating, default: 0

      t.timestamps
    end

    add_foreign_key :recipes, :users, column: :author_id
    add_index :recipes, :author_id
    add_index :recipes, :title, unique: true
    add_index :recipes, :average_taste_rating
    add_index :recipes, :average_effort_rating
  end
end
