json.recipe do
  json.partial! 'api/recipes/recipe', recipe: @recipe
end

json.ingredients do
  json.array! @recipe.ingredients do |ingredient|
    json.partial! 'api/ingredients/ingredient', ingredient: ingredient
  end
end

json.instructions do
  json.array! @recipe.instructions do |instruction|
    json.partial! 'api/instructions/instruction', instruction: instruction
  end
end
