json.recipe do
  json.partial! 'api/recipes/recipe', recipe: @recipe
end

json.user do
  json.set! @recipe.author.id do
    json.partial! 'api/users/user', user: @recipe.author
  end
end
