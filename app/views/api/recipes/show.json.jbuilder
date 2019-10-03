json.recipe do
  json.extract! @recipe,
    :id,
    :author_id,
    :title,
    :servings,
    :average_taste_rating,
    :average_effort_rating
end

json.ingredients do
  @recipe.ingredients.each do |ingredient|
    json.set! ingredient.id do
      json.partial! 'api/ingredients/ingredient', ingredient: ingredient
    end
  end
end

json.instructions do
  @recipe.instructions.each do |instruction|
    json.set! instruction.id do
      json.partial! 'api/instructions/instruction', instruction: instruction
    end
  end
end
