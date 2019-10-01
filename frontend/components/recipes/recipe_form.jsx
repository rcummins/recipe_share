import React from 'react';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formData;

    this.addInput = this.addInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addInput(key) {
    return e => {
      e.preventDefault();
      this.setState({ [key]: [...this.state[key], ''] });
    };
  }

  deleteInput(key, idx) {
    return e => {
      e.preventDefault();
      let arr = this.state[key];
      this.setState({ [key]: [...arr.slice(0, idx), ...arr.slice(idx + 1)] });
    };
  }

  handleInput(e) {
    if (['ingredients', 'instructions'].includes(e.target.id)) {
      let arr = this.state[e.target.id];
      arr[e.target.dataset.index] = e.target.value;
      this.setState({ [e.target.id]: arr });
    } else {
      this.setState({ [e.target.id]: e.target.value } );
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let formRecipe = {
      recipe: {
        author_id: this.props.currentUser.id,
        title: this.state.title,
        servings: this.state.servings
      }
    };

    this.props.submitAction(formRecipe).then(
      recipeAction => {

        this.props.clearRecipeErrors();

        // loop over ingredients to dispatch an action for each ingredient
        this.state.ingredients.forEach( ingredient => {

          let formIngredient = {
            ingredient: {
              recipe_id: recipeAction.recipe.id,
              ingredient: ingredient
            }
          };

          this.props.ingredientAction(formIngredient);

        });

        // loop over instructions to dispatch an action for each instruction
        this.state.instructions.forEach( (instruction, index) => {

          let formInstruction = {
            instruction: {
              recipe_id: recipeAction.recipe.id,
              step_number: index + 1,
              instruction: instruction
            }
          };

          this.props.instructionAction(formInstruction);

        });

        // redirect to the root page
        this.props.history.push("/");
      }
    );
  }

  render() {
    const { recipeErrors } = this.props;

    let recipeErrorMessage;
    if (recipeErrors.length > 0) {
      recipeErrorMessage = (
        <div className="error-message">
          <p>Please fix the following issue(s):</p>
          <ul>
            {recipeErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )
    }

    return(
      <div>
        <form className="recipe-form">

          <h2>{this.props.formTitle}</h2>

          { recipeErrorMessage }

          <div className="form-input">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              onChange={this.handleInput}
              value={this.state.title}
            />
          </div>

          <div className="form-input">
            <label htmlFor="servings">Servings:</label>
            <input
              type="number"
              id="servings"
              min="1"
              onChange={this.handleInput}
              value={this.state.servings}
            />
          </div>

          <section>

            <h3>Ingredients</h3>

            { this.state.ingredients.map( (ingredient, index) => (
              <div className="form-input" key={`ingredients-${index}`}>

                <label htmlFor="ingredients">Ingredient:</label>
                <input
                  type="text"
                  id="ingredients"
                  data-index={index}
                  onChange={this.handleInput}
                  value={ingredient}
                />

                { index > 0 ?
                  <button
                    className="button-delete-input"
                    onClick={this.deleteInput('ingredients', index)}
                  >Delete ingredient</button>
                : ''}
              </div>
            ))}

            <button
              className="button-add-input"
              onClick={this.addInput('ingredients')}
            >Add another ingredient</button>

          </section>

          <section>

            <h3>Instructions</h3>

            { this.state.instructions.map( (instruction, index) => (
              <div className="form-input" key={`instructions-${index}`}>

                <label htmlFor="instructions">Step {index + 1}:</label>
                <textarea
                  id="instructions"
                  data-index={index}
                  onChange={this.handleInput}
                  value={instruction}></textarea>

                { index > 0 ?
                  <button
                    className="button-delete-input"
                    onClick={this.deleteInput('instructions', index)}
                  >Delete step</button>
                : ''}
              </div>
            ))}

            <button
              className="button-add-input"
              onClick={this.addInput('instructions')}
            >Add another step</button>

          </section>

          <button
            className="button-recipe-form"
            onClick={this.handleSubmit}
          >{this.props.formSubmitButtonText}</button>
        </form>
      </div>
    );
  }
};

export default RecipeForm;
