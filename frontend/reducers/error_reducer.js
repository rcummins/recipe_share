import { combineReducers } from 'redux';

import sessionErrorReducer from './session_error_reducer';

const errorReducer = combineReducers({
  sessionErrors: sessionErrorReducer
});

export default errorReducer;

