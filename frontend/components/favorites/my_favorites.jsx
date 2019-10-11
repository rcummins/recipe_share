import React from 'react';
import { Link } from 'react-router-dom';

class MyFavorites extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMyFavorites(this.props.currentUser.id);
  }

  handleDelete(recipe) {
    return e => {
      e.preventDefault();
      this.props.deleteFavorite({ favorite: { id: recipe.favorite_id } });
    };
  }

  render() {
    const { favoriteRecipesArray } = this.props;

    const display = favoriteRecipesArray.length == 0 ? (
      <div className="recipe-list-empty">
        <p>You have not added any recipes to your favorites.</p>
        <p>
          Click on any recipe title to go to the recipe details page, where you 
          can add it to your favorites.
        </p>
      </div>
    ) : (
        <table>

          <thead>
            <tr>
              <th className="col-recipe">Recipe</th>
              <th className="col-rating">Taste rating</th>
              <th className="col-rating">Effort rating</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {favoriteRecipesArray.map((recipe, index) => (
              <tr key={index}>
                <td className="col-recipe">
                  <Link
                    className="link-recipe-detail"
                    to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </td>
                <td className="col-rating">
                  {
                    recipe.average_taste_rating == '0.0' ? (
                      <p>Not rated</p>
                    ) : (
                        <div className="rating-number-icon">
                          <p>{Number
                            .parseFloat(recipe.average_taste_rating)
                            .toFixed(1)}</p>
                          <img src={window.yellowStarURL} />
                        </div>
                      )
                  }
                </td>
                <td className="col-rating">
                  {
                    recipe.average_effort_rating == '0.0' ? (
                      <p>Not rated</p>
                    ) : (
                        <div className="rating-number-icon">
                          <p>{Number
                            .parseFloat(recipe.average_effort_rating)
                            .toFixed(1)}</p>
                          <img src={window.yellowKnifeURL} />
                        </div>
                      )
                  }
                </td>
                <td>
                  <button
                    className="button-delete-favorite"
                    onClick={this.handleDelete(recipe)}>Remove from favorites</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )
    return(
      <div className="recipe-list-and-sort-by">

        <div className="recipe-list">
          {display}
        </div>

      </div>
    )
  }
}

export default MyFavorites;
