import {
  RECEIVE_FAVORITES,
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/favorite_actions';

const favoritesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;
  let newFavorite;

  switch(action.type) {

    case RECEIVE_FAVORITES:
      return Object.assign({}, action.payload.favorites);

    case RECEIVE_FAVORITE:
      newFavorite = {};
      newFavorite[action.favorite.id] = action.favorite;
      return Object.assign({}, oldState, newFavorite);

    case REMOVE_FAVORITE:
      newState = Object.assign({}, oldState);
      delete newState[action.favorite.id];
      return newState;

    default:
      return oldState;
  }
};

export default favoritesReducer;
