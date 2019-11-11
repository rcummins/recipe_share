import {
  RECEIVE_RECIPE_DETAIL,
  RECEIVE_RECIPES
} from '../actions/recipe_actions';

const usersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RECIPE_DETAIL:
      return Object.assign({}, oldState, action.payload.author);

    case RECEIVE_RECIPES:
      return Object.assign({}, action.payload.users);

    default:
      return oldState;
  }
};

export default usersReducer;
