import { connect } from 'react-redux';

import { fetchRecipes } from '../../actions/recipe_actions';
import { recipesArray } from '../../reducers/selectors';
import AllRecipes from './all_recipes';

const mapStateToProps = state => ({
  recipes: recipesArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllRecipes);
