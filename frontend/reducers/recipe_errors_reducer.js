import {
  RECEIVE_RECIPE_ERRORS,
  CLEAR_RECIPE_ERRORS
} from '../actions/recipe_error_actions';

const recipeErrorsReducer = ( oldState = [], action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RECIPE_ERRORS:
      return action.errors;

    case CLEAR_RECIPE_ERRORS:
      return [];

    default:
      return oldState;
  }
};

export default recipeErrorsReducer;
