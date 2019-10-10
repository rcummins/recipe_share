import { RECEIVE_SORT_BY_METHOD } from '../actions/sort_by_actions';

const _initialState = 'TASTE_DESC';

const sortByReducer = ( oldState = _initialState, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_SORT_BY_METHOD:
      return action.method;

    default:
      return oldState;
  }
};

export default sortByReducer;
