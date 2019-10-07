import { connect } from 'react-redux';
import React from 'react';

import { fetchRecipeDetail, updateRecipe } from '../../actions/recipe_actions';
import {
  createIngredient,
  deleteIngredient } from '../../actions/ingredient_actions';
import {
  createInstruction,
  deleteInstruction } from '../../actions/instruction_actions';
import { clearRecipeErrors } from '../../actions/recipe_error_actions';
import {
  simpleIngredientsArray,
  simpleInstructionsArray } from '../../reducers/selectors';
import RecipeForm from './recipe_form';

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
  currentUser: state.session.currentUser,
  recipeErrors: state.errors.recipeErrors
});

const mapDispatchToProps = dispatch => ({
  submitAction1: formRecipe => dispatch(updateRecipe(formRecipe)),
  submitAction2: (ingredients, instructions, updateAction) => {

    /* fetch and then delete all ingredients and instructions before creating
    new ingredients and instructions based on the edit recipe form */
    dispatch(fetchRecipeDetail(updateAction.recipe.id)).then(
      fetchAction => {
        const ingredientIds = Object.keys(fetchAction.payload.ingredients);
        ingredientIds.forEach( id => (
          dispatch(deleteIngredient({ ingredient: { id } }))
        ));

        const instructionIds = Object.keys(fetchAction.payload.instructions);
        instructionIds.forEach( id => (
          dispatch(deleteInstruction({ instruction: { id }}))
        ));

        /* loop over ingredients to create each ingredient */
        ingredients.forEach(ingredient => {

          let formIngredient = {
            ingredient: {
              recipe_id: updateAction.recipe.id,
              ingredient: ingredient
            }
          };

          dispatch(createIngredient(formIngredient));
        });

        /* loop over instructions to create each instruction */
        instructions.forEach((instruction, index) => {

          let formInstruction = {
            instruction: {
              recipe_id: updateAction.recipe.id,
              step_number: index + 1,
              instruction: instruction
            }
          };

          dispatch(createInstruction(formInstruction));
        });
      }
    );
  },
  fetchRecipeDetail: recipeId => dispatch(fetchRecipeDetail(recipeId)),
  clearRecipeErrors: () => dispatch(clearRecipeErrors())
});

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author_id: null,
      formData: {
        id: '',
        title: '',
        servings: '',
        ingredients: [''],
        instructions: ['']
      }
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.handleUpdate();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.recipeId !== this.props.match.params.recipeId) {
      this.handleUpdate();
    }
  }

  handleUpdate() {
    this.props.fetchRecipeDetail(this.props.match.params.recipeId).then(
      recipeAction => {
        this.setState({
          author_id: recipeAction.payload.recipe.author_id,
          formData: {
            id: recipeAction.payload.recipe.id,
            title: recipeAction.payload.recipe.title,
            servings: recipeAction.payload.recipe.servings,
            ingredients: simpleIngredientsArray(recipeAction.payload),
            instructions: simpleInstructionsArray(recipeAction.payload)
          }
        });
      }
    );
  }

  render() {
    const {
      history,
      currentUser,
      recipeErrors,
      submitAction1,
      submitAction2,
      clearRecipeErrors
    } = this.props;

    const display = ( currentUser.id === this.state.author_id ) ? (
      <RecipeForm
        formData={this.state.formData}
        formTitle={'Edit your recipe'}
        formSubmitButtonText={'Update recipe'}
        history={history}
        currentUser={currentUser}
        recipeErrors={recipeErrors}
        submitAction1={submitAction1}
        submitAction2={submitAction2}
        clearRecipeErrors={clearRecipeErrors}
      />
    ) : (
      <div className="action-not-allowed">
        <p>Sorry, you can't edit this recipe because you didn't create it.</p>
      </div>
    )

    return( display );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRecipeForm);
