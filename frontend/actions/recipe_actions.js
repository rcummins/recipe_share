import * as RecipeAPIUtil from '../util/recipe_api_util';
import { receiveRecipeErrors } from './recipe_error_actions';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const RECEIVE_RECIPE_DETAIL = 'RECEIVE_RECIPE_DETAIL';

const receiveRecipes = payload => ({
  type:RECEIVE_RECIPES,
  payload
});

const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

const removeRecipe = recipe => ({
  type: REMOVE_RECIPE,
  recipe
});

const receiveRecipeDetail = payload => ({
  type: RECEIVE_RECIPE_DETAIL,
  payload
});

export const fetchRecipes = () => dispatch => (
  RecipeAPIUtil.fetchRecipes().then(
    payload => dispatch(receiveRecipes(payload))
  )
);

export const fetchRecipeDetail = recipeId => dispatch => (
  RecipeAPIUtil.fetchRecipeDetail(recipeId).then(
    payload => dispatch(receiveRecipeDetail(payload))
  )
);

export const createRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.createRecipe(formRecipe).then(
    recipe => dispatch(receiveRecipe(recipe)),
    errors => dispatch(receiveRecipeErrors(errors.responseJSON))
  )
);

export const updateRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.updateRecipe(formRecipe).then(
    recipe => dispatch(receiveRecipe(recipe)),
    errors => dispatch(receiveRecipeErrors(errors.responseJSON))
  )
);

export const deleteRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.deleteRecipe(formRecipe).then(
    recipe => dispatch(removeRecipe(recipe))
  )
);
