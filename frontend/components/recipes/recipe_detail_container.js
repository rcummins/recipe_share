import { connect } from 'react-redux';

import { fetchRecipeDetail, deleteRecipe } from '../../actions/recipe_actions';
import {
  ingredientsArray,
  instructionsArray,
  selectRecipeAuthor,
  ratingAuthorIds } from '../../reducers/selectors';
import RecipeDetail from './recipe_detail';

const mapStateToProps = (state, ownProps) => {
  const recipe = state.entities.recipes[ownProps.match.params.recipeId];

  return{
    recipe,
    author: selectRecipeAuthor(state, recipe),
    ingredients: ingredientsArray(state.entities),
    instructions: instructionsArray(state.entities),
    ratingAuthorIds: ratingAuthorIds(state.entities),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchRecipeDetail: recipeId => dispatch(fetchRecipeDetail(recipeId)),
  deleteRecipe: recipe => dispatch(deleteRecipe(recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
