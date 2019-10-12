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

export const currentUserHasRated = state => {
  let ratings = state.entities.ratings;
  let ratingIds = Object.keys(ratings);
  let ratingAuthorIds = ratingIds.map( id => ratings[id].author_id );
  return ratingAuthorIds.includes(state.session.currentUser.id);
};

export const ingredientsArray = ({ ingredients }) => {
  let ingredientIds = Object.keys(ingredients);
  let ingredientsUnsorted = ingredientIds.map( id => ingredients[id] );
  return ingredientsUnsorted.sort( (a, b) => a.item_number - b.item_number );
};

export const ingredientsArraySimple = payload => {
  if (!payload.ingredients) {
    return [''];
  }

  let ingredientsObjects = ingredientsArray(payload);
  return ingredientsObjects.map(obj => obj.ingredient);
};

export const instructionsArray = ({ instructions }) => {
  let instructionIds = Object.keys(instructions);
  let instructionsUnsorted = instructionIds.map( id => instructions[id] );
  return instructionsUnsorted.sort( (a, b) => a.step_number - b.step_number );
};

export const instructionsArraySimple = (payload) => {
  if (!payload.instructions) {
    return [''];
  }

  let instructionsObjects = instructionsArray(payload);
  return instructionsObjects.map(obj => obj.instruction);
};

export const selectRecipeAuthor = (state, recipe) => {
  return recipe ? state.entities.users[recipe.author_id] : null;
};

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

export const sortedFavoriteRecipesArray = state => {
  let favorites = state.entities.favorites;
  let favoriteIds = Object.keys(favorites);
  let favoritesArray = favoriteIds.map(id => favorites[id]);
  let unsortedFavoriteRecipes = favoritesArray.map(favorite =>
    Object.assign({},
      state.entities.recipes[favorite.recipe_id],
      { favorite_id: favorite.id }));

  return sortRecipes(state.ui.sortBy, unsortedFavoriteRecipes);
};

export const sortedRecipesArray = state => {
  const recipes = state.entities.recipes;
  const recipeIds = Object.keys(recipes);
  const unsortedRecipes = recipeIds.map( id => recipes[id] );

  return sortRecipes(state.ui.sortBy, unsortedRecipes);
};
