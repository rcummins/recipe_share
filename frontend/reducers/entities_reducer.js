import { combineReducers } from 'redux';

import recipesReducer from './recipes_reducer';

const entitiesReducer = combineReducers({
  recipes: recipesReducer
});

export default entitiesReducer;