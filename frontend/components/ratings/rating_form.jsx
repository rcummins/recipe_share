import React from 'react';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasteRating: {
        temp: null,
        clicked: null
      },
      effortRating: {
        temp: null,
        clicked: null
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(index) {
    return e => {
      this.setState({
        [e.target.id]: {
          temp: index,
          clicked: index
        }
      });
    };
  }

  handleMouseOut(e) {
    let clickedRating = this.state[e.target.id].clicked;
    this.setState({
      [e.target.id]: {
        temp: clickedRating,
        clicked: clickedRating
      }
    });
  }

  handleMouseOver(index) {
    return e => {
      let clickedRating = this.state[e.target.id].clicked;
      this.setState({
        [e.target.id]: {
          temp: index,
          clicked: clickedRating
        }
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let formRating = {
      rating: {
        recipe_id: this.props.recipeId,
        author_id: this.props.currentUser.id,
        taste_rating: this.state.tasteRating.clicked,
        effort_rating: this.state.effortRating.clicked
      }
    };

    this.props.createRating(formRating);
  }

  render() {
    const tasteRatingScale = ['Gross', 'Okay', 'Good', 'Very good', 'Amazing!'];
    const tasteRatingInput = (
      <div className="form-input-rating">
        <label>Taste:</label>
        <div className="rating-icons">
          {
            [1, 2, 3, 4, 5].map( index => (
              <img
              key={index}
              src={this.state.tasteRating.temp >= index ?
                window.yellowStarURL : window.grayStarURL}
              id="tasteRating"
              onClick={this.handleClick(index)}
              onMouseOver={this.handleMouseOver(index)}
              onMouseOut={this.handleMouseOut} />
            ))
          }
        </div>
        <p>{tasteRatingScale[this.state.tasteRating.temp - 1]}</p>
      </div>
    );

    const effortRatingScale = [
      'Quick & easy',
      'Somewhat easy',
      'Medium',
      'A lot of work',
      'So much work!'
    ];
    const effortRatingInput = (
      <div className="form-input-rating">
        <label>Effort:</label>
        <div className="rating-icons">
          {
            [1, 2, 3, 4, 5].map( index => (
              <img
                key={index}
                src={this.state.effortRating.temp >= index ?
                  window.yellowKnifeURL : window.grayKnifeURL}
                id="effortRating"
                onClick={this.handleClick(index)}
                onMouseOver={this.handleMouseOver(index)}
                onMouseOut={this.handleMouseOut} />
            ))
          }
        </div>
        <p>{effortRatingScale[this.state.effortRating.temp -1]}</p>
      </div>
    );

    return(
      <div className="rating-form">
        <h2>Rate this recipe</h2>

        { tasteRatingInput }

        { effortRatingInput }

        <button
          className="button-submit-form"
          onClick={this.handleSubmit}>Submit rating</button>
      </div>
    )
  }
}

export default RatingForm;
