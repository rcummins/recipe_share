import { connect } from 'react-redux';

import { deleteRecipe } from '../../actions/recipe_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';
import {
  ingredientsArray,
  instructionsArray,
  selectRecipeAuthor,
  currentUserHasRated,
  currentUserFavorite } from '../../reducers/selectors';
import RecipeDetail from './recipe_detail';

const mapStateToProps = (state, ownProps) => {
  const recipe = state.entities.recipes[ownProps.match.params.recipeId];

  return{
    recipe,
    author: selectRecipeAuthor(state, recipe),
    ingredients: ingredientsArray(state.entities, recipe),
    instructions: instructionsArray(state.entities, recipe),
    currentUserHasRated: currentUserHasRated(state, recipe),
    currentUserFavorite: currentUserFavorite(state, recipe),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: recipe => dispatch(deleteRecipe(recipe)),
  createFavorite: formFavorite => dispatch(createFavorite(formFavorite)),
  deleteFavorite: formFavorite => dispatch(deleteFavorite(formFavorite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
