import { connect } from 'react-redux';
import React from 'react';

import { updateRecipe } from '../../actions/recipe_actions';
import {
  createIngredient,
  deleteIngredient } from '../../actions/ingredient_actions';
import {
  createInstruction,
  deleteInstruction } from '../../actions/instruction_actions';
import { clearRecipeErrors } from '../../actions/recipe_error_actions';
import {
  selectRecipeAuthor,
  ingredientIdsArray,
  ingredientValuesArray,
  instructionIdsArray,
  instructionValuesArray
} from '../../reducers/selectors';
import RecipeForm from './recipe_form';

const mapStateToProps = (state, ownProps) => {
  const recipe = state.entities.recipes[ownProps.match.params.recipeId];

  return {
    author_id: selectRecipeAuthor(state, recipe).id,
    formData: {
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      ingredients: ingredientValuesArray(state.entities, recipe),
      instructions: instructionValuesArray(state.entities, recipe)
    },
    preexistingIngredientIds: ingredientIdsArray(state.entities, recipe),
    preexistingInstructionIds: instructionIdsArray(state.entities, recipe),
    history: ownProps.history,
    currentUser: state.session.currentUser,
    recipeErrors: state.errors.recipeErrors
  };
};

const mapDispatchToProps = dispatch => ({
  submitAction1: formRecipe => dispatch(updateRecipe(formRecipe)),
  submitAction2: (
      preexistingIngredientIds,
      preexistingInstructionIds,
      formIngredients,
      formInstructions,
      recipeAction
    ) => {

    /* delete all preexisting ingredients and instructions before creating
    new ingredients and instructions based on the edit recipe form */
    preexistingIngredientIds.forEach( id => (
      dispatch(deleteIngredient({ ingredient: { id }}))
    ));
    preexistingInstructionIds.forEach( id => (
      dispatch(deleteInstruction({ instruction: { id }}))
    ));

    /* create new ingredients based on the edit recipe form */
    formIngredients.forEach((formIngredient, index) => {
      let fullIngredientObject = {
        ingredient: {
          recipe_id: recipeAction.recipe.id,
          item_number: index + 1,
          ingredient: formIngredient
        }
      };
      dispatch(createIngredient(fullIngredientObject));
    });

    /* create new instructions based on the edit recipe form */
    formInstructions.forEach((formInstruction, index) => {
      let fullInstructionObject = {
        instruction: {
          recipe_id: recipeAction.recipe.id,
          step_number: index + 1,
          instruction: formInstruction
        }
      };
      dispatch(createInstruction(fullInstructionObject));
    });
  },
  clearRecipeErrors: () => dispatch(clearRecipeErrors())
});

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      author_id,
      formData,
      preexistingIngredientIds,
      preexistingInstructionIds,
      history,
      currentUser,
      recipeErrors,
      submitAction1,
      submitAction2,
      clearRecipeErrors
    } = this.props;

    let display = null;
    if ( currentUser.id === author_id ) {
      display =
        <RecipeForm
          formData={formData}
          formTitle={'Edit your recipe'}
          formSubmitButtonText={'Update recipe'}
          preexistingIngredientIds={preexistingIngredientIds}
          preexistingInstructionIds={preexistingInstructionIds}
          history={history}
          currentUser={currentUser}
          recipeErrors={recipeErrors}
          submitAction1={submitAction1}
          submitAction2={submitAction2}
          clearRecipeErrors={clearRecipeErrors}
        />;
    } else {
      display =
        <div className="action-not-allowed">
          <p>Sorry, you can't edit this recipe because you didn't create it.</p>
        </div>;
    }

    return( display );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRecipeForm);
