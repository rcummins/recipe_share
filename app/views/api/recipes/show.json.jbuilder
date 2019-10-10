json.recipe do
  json.partial! 'api/recipes/recipe', recipe: @recipe
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

json.author do
  json.set! @recipe.author.id do
    json.partial! 'api/users/user', user: @recipe.author
  end
end

json.ratings do
  @recipe.ratings.each do |rating|
    json.set! rating.id do
      json.partial! 'api/ratings/rating', rating: rating
    end
  end
end

json.favorites do
  @recipe.favorites.each do |favorite|
    json.set! favorite.id do
      json.partial! 'api/favorites/favorite', favorite: favorite
    end
  end
end
