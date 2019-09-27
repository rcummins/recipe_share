import {
  RECEIVE_RECIPES,
  RECEIVE_RECIPE,
  REMOVE_RECIPE
} from '../actions/recipe_actions';

const recipesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;
  switch(action.type) {

    case RECEIVE_RECIPES:
      newState = {};
      action.recipes.forEach( recipe => newState[recipe.id] = recipe );
      return newState;

    case RECEIVE_RECIPE:
      let newRecipe = {};
      newRecipe[action.recipe.id] = action.recipe;
      return Object.assign({}, oldState, newRecipe);

    case REMOVE_RECIPE:
      newState = Object.assign({}, oldState);
      delete newState[action.recipe.id];
      return newState;

    default:
      return oldState;
  }
};

export default recipesReducer;
