import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import recipesReducer from './recipes_reducer';
import ingredientsReducer from './ingredients_reducer';
import instructionsReducer from './instructions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  instructions: instructionsReducer
});

export default entitiesReducer;
