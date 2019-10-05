import * as IngredientAPIUtil from '../util/ingredient_api_util';

export const RECEIVE_INGREDIENT = "RECEIVE_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

const receiveIngredient = ingredient => ({
  type: RECEIVE_INGREDIENT,
  ingredient
});

const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  ingredient
});

export const createIngredient = formIngredient => dispatch => (
  IngredientAPIUtil.createIngredient(formIngredient).then(
    ingredient => dispatch(receiveIngredient(ingredient))
  )
);

export const deleteIngredient = formIngredient => dispatch => (
  IngredientAPIUtil.deleteIngredient(formIngredient).then(
    ingredient => dispatch(removeIngredient(ingredient))
  )
);
