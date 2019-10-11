json.favorites do
  @user.favorites.each do |favorite|
    json.set! favorite.id do
      json.partial! 'api/favorites/favorite', favorite: favorite
    end
  end
end

json.recipes do
  @user.favorite_recipes.each do |favorite_recipe|
    json.set! favorite_recipe.id do
      json.partial! 'api/recipes/recipe', recipe: favorite_recipe
    end
  end
end
