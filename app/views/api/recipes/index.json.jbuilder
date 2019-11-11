json.recipes do
  @recipes.each do |recipe|
    json.set! recipe.id do
      json.partial! 'api/recipes/recipe', recipe: recipe
    end
  end
end

json.users do
  @recipes.each do |recipe|
    json.set! recipe.author.id do
      json.partial! 'api/users/user', user: recipe.author
    end
  end
end

json.ingredients do
  @recipes.each do |recipe|
    recipe.ingredients.each do |ingredient|
      json.set! ingredient.id do
        json.partial! 'api/ingredients/ingredient', ingredient: ingredient
      end
    end
  end
end

json.instructions do
  @recipes.each do |recipe|
    recipe.instructions.each do |instruction|
      json.set! instruction.id do
        json.partial! 'api/instructions/instruction', instruction: instruction
      end
    end
  end
end
