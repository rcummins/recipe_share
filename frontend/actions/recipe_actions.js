import * as RecipeAPIUtil from '../util/recipe_api_util';
import { receiveRecipeErrors } from './recipe_error_actions';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_NEW_RECIPE = 'RECEIVE_NEW_RECIPE';
export const RECEIVE_UPDATED_RECIPE = 'RECEIVE_UPDATED_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

const receiveRecipes = payload => ({
  type:RECEIVE_RECIPES,
  payload
});

const receiveNewRecipe = payload => ({
  type: RECEIVE_NEW_RECIPE,
  payload
});

const receiveUpdatedRecipe = recipe => ({
  type: RECEIVE_UPDATED_RECIPE,
  recipe
});

const removeRecipe = recipe => ({
  type: REMOVE_RECIPE,
  recipe
});

export const fetchRecipes = () => dispatch => (
  RecipeAPIUtil.fetchRecipes().then(
    payload => dispatch(receiveRecipes(payload))
  )
);

export const createRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.createRecipe(formRecipe).then(
    payload => dispatch(receiveNewRecipe(payload)),
    errors => dispatch(receiveRecipeErrors(errors.responseJSON))
  )
);

export const updateRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.updateRecipe(formRecipe).then(
    recipe => dispatch(receiveUpdatedRecipe(recipe)),
    errors => dispatch(receiveRecipeErrors(errors.responseJSON))
  )
);

export const deleteRecipe = formRecipe => dispatch => (
  RecipeAPIUtil.deleteRecipe(formRecipe).then(
    recipe => dispatch(removeRecipe(recipe))
  )
);
