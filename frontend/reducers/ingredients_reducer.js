import {
  RECEIVE_INGREDIENT,
  REMOVE_INGREDIENT
} from '../actions/ingredient_actions';
import { RECEIVE_RECIPE_DETAIL } from '../actions/recipe_actions';

const ingredientsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_INGREDIENT:
      let newIngredient = {};
      newIngredient[action.ingredient.id] = action.ingredient;
      return Object.assign({}, oldState, newIngredient);

    case REMOVE_INGREDIENT:
      let newState = Object.assign({}, oldState);
      delete newState[action.ingredient.id];
      return newState;

    case RECEIVE_RECIPE_DETAIL:
      return Object.assign({}, action.payload.ingredients);

    default:
      return oldState;
  }
};

export default ingredientsReducer;
