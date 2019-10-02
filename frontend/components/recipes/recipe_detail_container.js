import { connect } from 'react-redux';

import { fetchRecipe } from '../../actions/recipe_actions';
import { fetchIngredients } from '../../actions/ingredient_actions';
import { fetchInstructions } from '../../actions/instruction_actions';
import { ingredientsArray, instructionsArray } from '../../reducers/selectors';
import RecipeDetail from './recipe_detail';

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  ingredients: ingredientsArray(state.entities),
  instructions: instructionsArray(state.entities)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
  fetchIngredients: recipeId => dispatch(fetchIngredients(recipeId)),
  fetchInstructions: recipeId => dispatch(fetchInstructions(recipeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeDetail);
