class CreateInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.integer :recipe_id, null: false
      t.integer :step_number, null: false
      t.text :instruction, null: false

      t.timestamps
    end

    add_foreign_key :instructions, :recipes
    add_index :instructions, :recipe_id
  end
end
