import React from 'react';
import { Link } from 'react-router-dom';

import RatingFormContainer from '../ratings/rating_form_container';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleFavorite = this.handleToggleFavorite.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteRecipe({ recipe: this.props.recipe }).then(
      () => this.props.history.push("/myrecipes")
    );
  }

  handleToggleFavorite(e) {
    e.preventDefault();
    const { currentUserFavorite } = this.props;

    if (currentUserFavorite) {
      let formFavorite = { favorite: { id: currentUserFavorite.id } };
      this.props.deleteFavorite(formFavorite);
    } else {
      let formFavorite = {
        favorite: {
          recipe_id: this.props.recipe.id,
          user_id: this.props.currentUser.id
        }
      };
      this.props.createFavorite(formFavorite);
    }
  }

  render() {
    const {
      recipe,
      ingredients,
      instructions,
      author,
      currentUser,
      currentUserFavorite,
      currentUserHasRated } = this.props;

    if (!recipe || !author) {
      return(<p>Loading...</p>);
    }

    let displayTitleAndFavoriteButton;
    if (currentUser) {
      displayTitleAndFavoriteButton = (
        <div className="title-and-favorite-button">
          <h3>{recipe.title}</h3>
          <button
            className={
              currentUserFavorite ?
              "button-delete-favorite" : "button-add-favorite"}
            onClick={this.handleToggleFavorite}
          >
            {currentUserFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div>
      );
    } else {
      displayTitleAndFavoriteButton = (<h3>{recipe.title}</h3>);
    }

    let displayAuthorOptions;
    if (currentUser && currentUser.id === author.id) {
      displayAuthorOptions = (
        <div className="recipe-author-options">
          <Link
            className="link-edit-recipe"
            to={`/recipes/${recipe.id}/edit`}>Edit recipe</Link>

          <button
            className="button-delete-recipe"
            onClick={this.handleDelete}>Delete recipe</button>
        </div>
      )
    }

    let displayRatingForm;
    if (currentUser && currentUser.id !== author.id) {
      if (currentUserHasRated) {
        displayRatingForm = (
          <div className="rating-form">
            <div className="form-input-rating">
              <span className="check-mark">{'\u2714'}</span>
              <p>You have submitted a rating for this recipe</p>
            </div>
          </div>
        );
      } else {
        displayRatingForm = <RatingFormContainer recipeId={recipe.id} />;
      }
    }

    return(
      <div className="recipe-detail">

        { displayTitleAndFavoriteButton }

        <p className="recipe-author">By {author.username}</p>

        <p>Servings: {recipe.servings}</p>

        <section>

          <h4>Ingredients</h4>

          <ul>
            { ingredients.map( (ingredient, index) => (
              <li key={`ingredient-${index}`}>{ingredient.ingredient}</li>
            ))}
          </ul>
        </section>

        <section>

          <h4>Instructions</h4>

          <table>
            <tbody>
              { instructions.map( (instruction, index) => (
                <tr key={`instruction-${index}`}>
                  <td>{instruction.step_number}.</td>
                  <td>{instruction.instruction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        { displayAuthorOptions }

        { displayRatingForm }
      </div>
    );
  }
};

export default RecipeDetail;
