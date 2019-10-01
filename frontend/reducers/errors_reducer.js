import { combineReducers } from 'redux';

import sessionErrorReducer from './session_error_reducer';
import recipeErrorsReducer from './recipe_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorReducer,
  recipeErrors: recipeErrorsReducer
});

export default errorsReducer;

