import * as IngredientAPIUtil from '../util/ingredient_api_util';

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";
export const RECEIVE_INGREDIENT = "RECEIVE_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

const receiveIngredients = ingredients => ({
  type: RECEIVE_INGREDIENTS,
  ingredients
});

const receiveIngredient = ingredient => ({
  type: RECEIVE_INGREDIENT,
  ingredient
});

const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  ingredient
});

export const fetchIngredients = recipeId => dispatch => (
  IngredientAPIUtil.fetchIngredients(recipeId).then(
    ingredients => dispatch(receiveIngredients(ingredients))
  )
);

export const createIngredient = formIngredient => dispatch => (
  IngredientAPIUtil.createIngredient(formIngredient).then(
    ingredient => dispatch(receiveIngredient(ingredient))
  )
);

export const updateIngredient = formIngredient => dispatch => (
  IngredientAPIUtil.updateIngredient(formIngredient).then(
    ingredient => dispatch(receiveIngredient(ingredient))
  )
);

export const deleteIngredient = formIngredient => dispatch => (
  IngredientAPIUtil.deleteIngredient(formIngredient).then(
    ingredient => dispatch(removeIngredient(ingredient))
  )
);
