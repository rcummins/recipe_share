import { combineReducers } from 'redux';

import sessionErrorReducer from './session_error_reducer';
import recipeErrorsReducer from './recipe_errors_reducer';
import ratingErrorsReducer from './rating_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorReducer,
  recipeErrors: recipeErrorsReducer,
  ratingErrors: ratingErrorsReducer
});

export default errorsReducer;

