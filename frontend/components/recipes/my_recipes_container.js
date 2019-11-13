import { connect } from 'react-redux';

import { fetchRecipes, deleteRecipe } from '../../actions/recipe_actions';
import { myRecipesArraySorted, recipesFetched } from '../../reducers/selectors';
import MyRecipes from './my_recipes';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  recipesFetched: recipesFetched(state),
  myRecipesArraySorted: myRecipesArraySorted(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  deleteRecipe: recipe => dispatch(deleteRecipe(recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRecipes);
