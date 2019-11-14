import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';
import {
  RECEIVE_CURRENT_USER_FAVORITES_RATINGS
} from '../actions/session_actions';

const favoritesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_CURRENT_USER_FAVORITES_RATINGS:
      return Object.assign({}, action.payload.favorites);

    case RECEIVE_FAVORITE:
      return Object.assign({}, oldState, action.favorite);

    case REMOVE_FAVORITE:
      let newState = Object.assign({}, oldState);
      delete newState[action.favorite.id];
      return newState;

    default:
      return oldState;
  }
};

export default favoritesReducer;
