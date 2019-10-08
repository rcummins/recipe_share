class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :recipe_id, null: false
      t.integer :author_id, null: false
      t.integer :taste_rating, null: false
      t.integer :effort_rating, null: false

      t.timestamps
    end

    add_foreign_key :ratings, :recipes
    add_foreign_key :ratings, :users, column: :author_id
    add_index :ratings, :recipe_id
    add_index :ratings, [:recipe_id, :author_id], unique: true
  end
end
