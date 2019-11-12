import { RECEIVE_RECIPES, RECEIVE_NEW_RECIPE } from '../actions/recipe_actions';

const usersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RECIPES:
      return Object.assign({}, action.payload.users);

    case RECEIVE_NEW_RECIPE:
      let newUser = {};
      newUser[action.payload.user.id] = action.payload.user;
      return Object.assign({}, oldState, newUser);

    default:
      return oldState;
  }
};

export default usersReducer;
