import { connect } from 'react-redux';

import { fetchRecipeDetail } from '../../actions/recipe_actions';
import { ingredientsArray, instructionsArray } from '../../reducers/selectors';
import RecipeDetail from './recipe_detail';

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  ingredients: ingredientsArray(state.entities),
  instructions: instructionsArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipeDetail: recipeId => dispatch(fetchRecipeDetail(recipeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
