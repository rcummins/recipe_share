json.set! @ingredient.id do
  json.partial! 'api/ingredients/ingredient', ingredient: @ingredient
end
