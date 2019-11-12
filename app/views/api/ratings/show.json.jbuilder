json.rating do
  json.partial! 'api/ratings/rating', rating: @rating
end

json.recipe do
  json.partial! 'api/recipes/recipe', recipe: @rating.recipe
end
