export const createIngredient = ingredient => (
  $.ajax({
    method: 'POST',
    url: '/api/ingredients',
    data: ingredient
  })
);

export const deleteIngredient = ingredient => (
  $.ajax({
    method: 'DELETE',
    url: `/api/ingredients/${ingredient.ingredient.id}`
  })
);
