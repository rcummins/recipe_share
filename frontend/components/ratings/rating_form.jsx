import React from 'react';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasteRating: '',
      effortRating: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    let formRating = {
      rating: {
        recipe_id: this.props.recipeId,
        author_id: this.props.currentUser.id,
        taste_rating: this.state.tasteRating,
        effort_rating: this.state.effortRating
      }
    };

    this.props.createRating(formRating);
  }

  render() {
    return(
      <div className="rating-form">
        <h2>Rate this recipe</h2>

        <div className="form-input-taste">
          <label htmlFor="tasteRating">Taste:</label>
          <input
            type="number"
            id="tasteRating"
            min="1"
            max="5"
            onChange={this.handleInput}
            value={this.state.tasteRating}
          />
        </div>

        <div className="form-input-effort">
          <label htmlFor="effortRating">Effort:</label>
          <input
            type="number"
            id="effortRating"
            min="1"
            max="5"
            onChange={this.handleInput}
            value={this.state.effortRating}
          />
        </div>

        <button
          className="button-submit-form"
          onClick={this.handleSubmit}>Submit rating</button>
      </div>
    )
  }
}

export default RatingForm;
