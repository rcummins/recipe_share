import { connect } from 'react-redux';

import { fetchRecipes } from '../../actions/recipe_actions';
import {
  allRecipesArraySorted,
  recipesFetched
} from '../../reducers/selectors';
import AllRecipes from './all_recipes';

const mapStateToProps = state => ({
  recipesFetched: recipesFetched(state),
  allRecipesArraySorted: allRecipesArraySorted(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRecipes);
