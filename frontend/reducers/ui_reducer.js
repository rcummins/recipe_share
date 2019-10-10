import { combineReducers } from 'redux';

import sortByReducer from './sort_by_reducer';

const uiReducer = combineReducers({
  sortBy: sortByReducer
});

export default uiReducer;
