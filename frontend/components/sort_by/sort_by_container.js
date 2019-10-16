import { connect } from 'react-redux';

import { receiveSortByMethod } from '../../actions/sort_by_actions';
import SortBy from './sort_by';

const mapStateToProps = state => ({
  sortBy: state.ui.sortBy
});

const mapDispatchToProps = dispatch => ({
  receiveSortByMethod: formMethod => dispatch(receiveSortByMethod(formMethod))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortBy);
