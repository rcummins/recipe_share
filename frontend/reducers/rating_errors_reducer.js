import {
  RECEIVE_RATING_ERRORS,
  CLEAR_RATING_ERRORS } from '../actions/rating_error_actions';

const ratingErrorsReducer = ( oldState = [], action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_RATING_ERRORS:
      return action.errors;

    case CLEAR_RATING_ERRORS:
      return [];

    default:
      return oldState;
  }
};

export default ratingErrorsReducer;
