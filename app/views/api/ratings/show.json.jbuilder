json.rating do
  json.set! @rating.id do
    json.partial! 'api/ratings/rating', rating: @rating
  end
end

json.recipe do
  json.partial! 'api/recipes/recipe', recipe: @rating.recipe
end
