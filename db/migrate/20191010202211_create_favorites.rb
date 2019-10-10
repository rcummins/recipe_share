class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_foreign_key :favorites, :recipes
    add_foreign_key :favorites, :users
    add_index :favorites, :user_id
    add_index :favorites, [:recipe_id, :user_id], unique: true
  end
end
