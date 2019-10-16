import { connect } from 'react-redux';

import { fetchMyRecipes, deleteRecipe } from '../../actions/recipe_actions';
import { sortedRecipesArray } from '../../reducers/selectors';
import MyRecipes from './my_recipes';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  sortedRecipesArray: sortedRecipesArray(state)
});

const mapDispatchToProps = dispatch => ({
  fetchMyRecipes: authorId => dispatch(fetchMyRecipes(authorId)),
  deleteRecipe: recipe => dispatch(deleteRecipe(recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRecipes);
