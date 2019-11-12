import {
  RECEIVE_RECIPES,
  RECEIVE_NEW_RECIPE,
  RECEIVE_UPDATED_RECIPE,
  REMOVE_RECIPE
} from '../actions/recipe_actions';
import { RECEIVE_RATING } from '../actions/rating_actions';

const recipesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RECIPES:
      return Object.assign({}, action.payload.recipes);

    case RECEIVE_NEW_RECIPE:
    case RECEIVE_RATING:
      let newRecipe = {};
      newRecipe[action.payload.recipe.id] = action.payload.recipe;
      return Object.assign({}, oldState, newRecipe);

    case RECEIVE_UPDATED_RECIPE:
      let updatedRecipe = {};
      updatedRecipe[action.recipe.id] = action.recipe;
      return Object.assign({}, oldState, updatedRecipe);

    case REMOVE_RECIPE:
      let newState = Object.assign({}, oldState);
      delete newState[action.recipe.id];
      return newState;

    default:
      return oldState;
  }
};

export default recipesReducer;
