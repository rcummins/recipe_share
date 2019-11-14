import {
  RECEIVE_INGREDIENT,
  REMOVE_INGREDIENT
} from '../actions/ingredient_actions';
import { RECEIVE_RECIPES, REMOVE_RECIPE } from '../actions/recipe_actions';

const ingredientsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;

  switch(action.type) {

    case RECEIVE_INGREDIENT:
      return Object.assign({}, oldState, action.ingredient);

    case REMOVE_INGREDIENT:
      newState = Object.assign({}, oldState);
      delete newState[action.ingredient.id];
      return newState;

    case RECEIVE_RECIPES:
      return Object.assign({}, action.payload.ingredients);

    case REMOVE_RECIPE:
      newState = Object.assign({}, oldState);
      action.payload.ingredients.forEach( ingredient => {
        delete newState[ingredient.id];
      });
      return newState;

    default:
      return oldState;
  }
};

export default ingredientsReducer;
