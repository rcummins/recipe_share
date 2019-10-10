import { RECEIVE_RATING } from '../actions/rating_actions';
import { RECEIVE_RECIPE_DETAIL } from '../actions/recipe_actions';

const ratingsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RATING:
      let newRating = {};
      newRating[action.rating.id] = action.rating;
      return Object.assign({}, oldState, newRating);

    case RECEIVE_RECIPE_DETAIL:
      return Object.assign({}, action.payload.ratings);

    default:
      return oldState;
  }
};

export default ratingsReducer;
