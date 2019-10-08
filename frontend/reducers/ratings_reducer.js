import { RECEIVE_RATING } from '../actions/rating_actions';

const ratingsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RATING:
      let newRating = {};
      newRating[action.rating.id] = action.rating;
      return Object.assign({}, oldState, newRating);

    default:
      return oldState;
  }
};

export default ratingsReducer;
