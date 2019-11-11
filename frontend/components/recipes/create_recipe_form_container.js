import { connect } from 'react-redux';

import { createRecipe } from '../../actions/recipe_actions';
import { createIngredient } from '../../actions/ingredient_actions';
import { createInstruction } from '../../actions/instruction_actions';
import { clearRecipeErrors } from '../../actions/recipe_error_actions';
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
  preexistingIngredientIds: [],
  preexistingInstructionIds: [],
  currentUser: state.session.currentUser,
  recipeErrors: state.errors.recipeErrors
});

const mapDispatchToProps = dispatch => ({
  submitAction1: formRecipe => dispatch(createRecipe(formRecipe)),
  submitAction2: (
      preexistingIngredientIds,
      preexistingInstructionIds,
      ingredients,
      instructions,
      recipeAction
    ) => {

    // loop over ingredients to create each ingredient
    ingredients.forEach((ingredient, index) => {

      let formIngredient = {
        ingredient: {
          recipe_id: recipeAction.recipe.id,
          item_number: index + 1,
          ingredient: ingredient
        }
      };

      dispatch(createIngredient(formIngredient));
    });

    // loop over instructions to create each instruction
    instructions.forEach((instruction, index) => {

      let formInstruction = {
        instruction: {
          recipe_id: recipeAction.recipe.id,
          step_number: index + 1,
          instruction: instruction
        }
      };

      dispatch(createInstruction(formInstruction));
    });
  },
  clearRecipeErrors: () => dispatch(clearRecipeErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);
