import { RECEIVE_RATING } from '../actions/rating_actions';
import {
  RECEIVE_CURRENT_USER_FAVORITES_RATINGS
} from '../actions/session_actions';

const ratingsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_CURRENT_USER_FAVORITES_RATINGS:
      return Object.assign({}, action.payload.ratings);

    case RECEIVE_RATING:
      return Object.assign({}, oldState, action.payload.rating);

    default:
      return oldState;
  }
};

export default ratingsReducer;
