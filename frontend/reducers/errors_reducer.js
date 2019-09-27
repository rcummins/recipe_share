import { combineReducers } from 'redux';

import sessionErrorReducer from './session_error_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorReducer
});

export default errorsReducer;

