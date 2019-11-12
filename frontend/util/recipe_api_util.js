export const fetchRecipes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/recipes'
  })
);

export const createRecipe = recipe => (
  $.ajax({
    method: 'POST',
    url: '/api/recipes',
    data: recipe
  })
);

export const updateRecipe = recipe => (
  $.ajax({
    method: 'PUT',
    url: `/api/recipes/${recipe.recipe.id}`,
    data: recipe
  })
);

export const deleteRecipe = recipe => (
  $.ajax({
    method: 'DELETE',
    url: `/api/recipes/${recipe.recipe.id}`
  })
);
