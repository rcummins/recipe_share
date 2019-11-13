// Selectors for a recipe's favorites, ratings and author

export const currentUserFavorite = (state, recipe) => {
  let currentUser = state.session.currentUser;
  if (!currentUser || !recipe) {
    return null;
  }

  let favorites = state.entities.favorites;
  let favoriteIds = Object.keys(favorites);
  let favoritesArray = favoriteIds.map( id => favorites[id] );
  return favoritesArray.find( fav => (
    fav.user_id === currentUser.id && fav.recipe_id === recipe.id
  ));
};

export const currentUserHasRated = (state, recipe) => {
  let currentUser = state.session.currentUser;
  if (!currentUser || !recipe) {
    return null;
  }

  let ratings = state.entities.ratings;
  let ratingIds = Object.keys(ratings);
  let ratingsArray = ratingIds.map( id => ratings[id] );
  return ratingsArray.find( rating => (
    rating.author_id === currentUser.id && rating.recipe_id === recipe.id
  ));
};

export const selectRecipeAuthor = (state, recipe) => {
  return recipe ? state.entities.users[recipe.author_id] : null;
};

// Selectors for ingredients and instructions

export const ingredientsArray = ({ ingredients }, recipe) => {
  if (!ingredients || !recipe) { return []; }
  let ingredientIds = Object.keys(ingredients);
  let allIngredients = ingredientIds.map( id => ingredients[id] );
  let ingredientsUnsorted = allIngredients.filter( ingredient => (
    ingredient.recipe_id === recipe.id
  ));
  return ingredientsUnsorted.sort( (a, b) => a.item_number - b.item_number );
};

export const ingredientIdsArray = (state, recipe) => {
  const ingredients = ingredientsArray(state, recipe);
  return ingredients.map(obj => obj.id);
};

export const ingredientValuesArray = (state, recipe) => {
  const ingredients = ingredientsArray(state, recipe);
  return ingredients.map(obj => obj.ingredient);
};

export const instructionsArray = ({ instructions }, recipe) => {
  if (!instructions || !recipe) { return []; }
  let instructionIds = Object.keys(instructions);
  let allInstructions = instructionIds.map( id => instructions[id] );
  let instructionsUnsorted = allInstructions.filter( instruction => (
    instruction.recipe_id === recipe.id
  ));
  return instructionsUnsorted.sort( (a, b) => a.step_number - b.step_number );
};

export const instructionIdsArray = (state, recipe) => {
  const instructions = instructionsArray(state, recipe);
  return instructions.map(obj => obj.id);
};

export const instructionValuesArray = (state, recipe) => {
  const instructions = instructionsArray(state, recipe);
  return instructions.map(obj => obj.instruction);
};

// Selectors for lists of recipes

const sortRecipes = (sortBy, unsortedRecipes) => {
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

const allRecipesArray = state => {
  const recipes = state.entities.recipes;
  const recipeIds = Object.keys(recipes);
  return recipeIds.map(id => recipes[id]);
};

export const allRecipesArraySorted = state => {
  const allRecipes = allRecipesArray(state);

  return sortRecipes(state.ui.sortBy, allRecipes);
};

export const myFavoriteRecipesArraySorted = state => {
  let favorites = state.entities.favorites;
  let favoriteIds = Object.keys(favorites);
  let favoritesArray = favoriteIds.map(id => favorites[id]);
  let unsortedFavoriteRecipes = favoritesArray.map(favorite =>
    Object.assign({},
      state.entities.recipes[favorite.recipe_id],
      { favorite_id: favorite.id }));

  return sortRecipes(state.ui.sortBy, unsortedFavoriteRecipes);
};

export const myRecipesArraySorted = state => {
  const allRecipes = allRecipesArray(state);
  const myRecipes = allRecipes.filter(recipe => (
    recipe.author_id === state.session.currentUser.id
  ));

  return sortRecipes(state.ui.sortBy, myRecipes);
};

export const recipesFetched = state => (
  Object.keys(state.entities.recipes).length > 0
);
