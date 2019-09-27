import React from 'react';

class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      servings: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(key) {
    return e => this.setState({ [key]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let newRecipe = { recipe: this.state };
    newRecipe.recipe.author_id = this.props.currentUser.id;
    this.props.submitAction(newRecipe).then(
      () => {
        this.props.history.push("/");
      }
    );
  }

  render() {
    return(
      <div>
        <form className="recipe-form">

          <h2>{this.props.formTitle}</h2>

          <div className="form-input">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              onChange={this.handleInput('title')}
              value={this.state.title}
            />
          </div>

          <div className="form-input">
            <label htmlFor="servings">Servings:</label>
            <input
              type="number"
              id="servings"
              min="1"
              onChange={this.handleInput('servings')}
              value={this.state.servings}
            />
          </div>

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
