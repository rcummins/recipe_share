import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session_error_actions';

const sessionErrorReducer = ( oldState = [], action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    case CLEAR_SESSION_ERRORS:
      return [];

    default:
      return oldState;
  }
};

export default sessionErrorReducer;
