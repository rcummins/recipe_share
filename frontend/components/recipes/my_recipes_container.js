import { connect } from 'react-redux';

import { fetchRecipes, deleteRecipe } from '../../actions/recipe_actions';
import { myRecipesArraySorted } from '../../reducers/selectors';
import MyRecipes from './my_recipes';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
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
