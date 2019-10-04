export const fetchRecipes = () => (
  $.ajax({
    method: 'GET',
    url: '/api/recipes'
  })
);

export const fetchMyRecipes = authorId => (
  $.ajax({
    method: 'GET',
    url: `/api/recipes?author_id=${authorId}`
  })
);

export const fetchRecipeDetail = recipeId => (
  $.ajax({
    method: 'GET',
    url: `/api/recipes/${recipeId}`
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
