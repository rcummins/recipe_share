export const currentUserFavorite = state => {
  let favorites = state.entities.favorites;
  let favoriteIds = Object.keys(favorites);
  let favoritesArray = favoriteIds.map( id => favorites[id] );
  let currentUser = state.session.currentUser;

  if (!currentUser) {
    return null;
  }
  return favoritesArray.find( fav => fav.user_id === currentUser.id );
};

export const sortedFavoriteRecipesArray = state => {
  let favorites = state.entities.favorites;
  let recipes = state.entities.recipes;
  let sortBy = state.ui.sortBy;

  let favoriteIds = Object.keys(favorites);
  let favoritesArray = favoriteIds.map( id => favorites[id] );
  let unsortedFavoriteRecipes = favoritesArray.map( favorite =>
    Object.assign({},
      recipes[favorite.recipe_id],
      { favorite_id: favorite.id }));

  if (sortBy === 'EFFORT_ASC') {
    return unsortedFavoriteRecipes.sort(
      (a, b) => a.average_effort_rating - b.average_effort_rating);
  } else if (sortBy === 'EFFORT_DESC') {
    return unsortedFavoriteRecipes.sort(
      (a, b) => b.average_effort_rating - a.average_effort_rating);
  } else if (sortBy === 'TASTE_ASC') {
    return unsortedFavoriteRecipes.sort(
      (a, b) => a.average_taste_rating - b.average_taste_rating);
  } else {
    return unsortedFavoriteRecipes.sort(
      (a, b) => b.average_taste_rating - a.average_taste_rating);
  }
};

export const ingredientsArray = ({ ingredients }) => {
  let ingredientIds = Object.keys(ingredients);
  let ingredientsUnsorted = ingredientIds.map( id => ingredients[id] );
  return ingredientsUnsorted.sort( (a, b) => a.item_number - b.item_number );
};

export const instructionsArray = ({ instructions }) => {
  let instructionIds = Object.keys(instructions);
  let instructionsUnsorted = instructionIds.map( id => instructions[id] );
  return instructionsUnsorted.sort( (a, b) => a.step_number - b.step_number );
};

export const ratingAuthorIds = ({ ratings }) => {
  let ratingIds = Object.keys(ratings);
  return ratingIds.map( id => ratings[id].author_id );
};

export const recipesArray = ({ recipes }) => {
  let recipeIds = Object.keys(recipes);
  return recipeIds.map( id => recipes[id] );
};

export const sortedRecipesArray = state => {
  const recipes = state.entities.recipes;
  const sortBy = state.ui.sortBy;

  const recipeIds = Object.keys(recipes);
  const unsortedRecipes = recipeIds.map( id => recipes[id] );

  if (sortBy === 'EFFORT_ASC') {
    return unsortedRecipes.sort(
      (a, b) => a.average_effort_rating - b.average_effort_rating);
  } else if (sortBy === 'EFFORT_DESC') {
    return unsortedRecipes.sort(
      (a, b) => b.average_effort_rating - a.average_effort_rating);
  } else if (sortBy === 'TASTE_ASC') {
    return unsortedRecipes.sort(
      (a, b) => a.average_taste_rating - b.average_taste_rating);
  } else {
    return unsortedRecipes.sort(
      (a, b) => b.average_taste_rating - a.average_taste_rating);
  }
};

export const selectRecipeAuthor = ( state, recipe ) => {
  return recipe ? state.entities.users[recipe.author_id] : null;
};

export const simpleIngredientsArray = ({ ingredients }) => {
  if (!ingredients) {
    return [''];
  }

  let ingredientIds = Object.keys(ingredients);
  let ingredientObjsUnsorted = ingredientIds.map( id => ingredients[id]);
  let ingredientObjsSorted =
    ingredientObjsUnsorted.sort( (a, b) => a.item_number - b.item_number );
  return ingredientObjsSorted.map( obj => obj.ingredient );
};

export const simpleInstructionsArray = ({ instructions }) => {
  if (!instructions) {
    return [''];
  }

  let instructionIds = Object.keys(instructions);
  let instructionObjsUnsorted = instructionIds.map( id => instructions[id]);
  let instructionObjsSorted =
    instructionObjsUnsorted.sort( (a, b) => a.step_number - b.step_number );
  return instructionObjsSorted.map( obj => obj.instruction );
};
