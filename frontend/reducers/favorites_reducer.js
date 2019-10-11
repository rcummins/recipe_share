import {
  RECEIVE_FAVORITES,
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/favorite_actions';
import { RECEIVE_RECIPE_DETAIL } from '../actions/recipe_actions';

const favoritesReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;
  let newFavorite;

  switch(action.type) {

    case RECEIVE_FAVORITES:
      newState = {};
      action.favorites.forEach( favorite => newState[favorite.id] = favorite );
      return newState;

    case RECEIVE_FAVORITE:
      newFavorite = {};
      newFavorite[action.favorite.id] = action.favorite;
      return Object.assign({}, oldState, newFavorite);

    case REMOVE_FAVORITE:
      newState = Object.assign({}, oldState);
      delete newState[action.favorite.id];
      return newState;

    case RECEIVE_RECIPE_DETAIL:
      return Object.assign({}, action.payload.favorites);

    default:
      return oldState;
  }
};

export default favoritesReducer;
