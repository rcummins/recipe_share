import { RECEIVE_RECIPE_DETAIL } from '../actions/recipe_actions';

const usersReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RECIPE_DETAIL:
      return Object.assign({}, oldState, action.payload.author);

    default:
      return oldState;
  }
};

export default usersReducer;
