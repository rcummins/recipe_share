import { connect } from 'react-redux';

import { fetchRecipes } from '../../actions/recipe_actions';
import { receiveSortByMethod } from '../../actions/sort_by_actions';
import { sortedRecipesArray } from '../../reducers/selectors';
import AllRecipes from './all_recipes';

const mapStateToProps = state => ({
  sortedRecipesArray: sortedRecipesArray(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  receiveSortByMethod: formMethod => dispatch(receiveSortByMethod(formMethod))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRecipes);
