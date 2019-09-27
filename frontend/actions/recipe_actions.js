import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

const receiveRecipes = recipes => ({
  type:RECEIVE_RECIPES,
  recipes
});

const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

const removeRecipe = recipe => ({
  type: REMOVE_RECIPE,
  recipe
});

export const fetchRecipes = () => dispatch => (
  RecipeAPIUtil.fetchRecipes().then(
    recipes => dispatch(receiveRecipes(recipes))
  )
);

export const createRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.createRecipe(formRecipe).then(
    recipe => dispatch(receiveRecipe(recipe))
  )
);

export const updateRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.updateRecipe(formRecipe).then(
    recipe => dispatch(receiveRecipe(recipe))
  )
);

export const deleteRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.deleteRecipe(formRecipe).then(
    recipe => dispatch(removeRecipe(recipe))
  )
);
