import { connect } from 'react-redux';

import { createRecipe } from '../../actions/recipe_actions';
import { createIngredient } from '../../actions/ingredient_actions';
import { createInstruction } from '../../actions/instruction_actions';
import RecipeForm from './recipe_form';

const mapStateToProps = state => ({
  formData: {
    title: '',
    servings: '',
    ingredients: [''],
    instructions: ['']
  },
  formTitle: 'Create a new recipe',
  formSubmitButtonText: 'Create recipe',
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  submitAction: formRecipe => dispatch(createRecipe(formRecipe)),
  ingredientAction: formIngredient => (
    dispatch(createIngredient(formIngredient))
  ),
  instructionAction: formInstruction => (
    dispatch(createInstruction(formInstruction))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);
