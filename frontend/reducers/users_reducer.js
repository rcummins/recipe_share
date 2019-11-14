import { RECEIVE_RECIPES, RECEIVE_NEW_RECIPE } from '../actions/recipe_actions';

const usersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RECIPES:
      return Object.assign({}, action.payload.users);

    case RECEIVE_NEW_RECIPE:
      return Object.assign({}, oldState, action.payload.user);

    default:
      return oldState;
  }
};

export default usersReducer;
