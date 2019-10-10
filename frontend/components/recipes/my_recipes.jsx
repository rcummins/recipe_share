import React from 'react';
import { Link } from 'react-router-dom';

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchMyRecipes(this.props.currentUser.id);
  }

  handleDelete(recipe) {
    return e => {
      e.preventDefault();
      this.props.deleteRecipe({ recipe });
    };
  }

  render() {
    const { recipes } = this.props;

    const display = recipes.length == 0 ? (
      <div className="recipe-list-empty">
        <p>You have not created any recipes yet!</p>
      </div>
    ) : (
      <table>

        <thead>
          <tr>
            <th className="col-recipe">Recipe</th>
            <th className="col-rating">Taste rating</th>
            <th className="col-rating">Effort rating</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {recipes.map((recipe, index) => (
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
                <Link
                  className="link-edit-recipe"
                  to={`/recipes/${recipe.id}/edit`}>Edit</Link>
              </td>
              <td>
                <button
                  className="button-delete-recipe"
                  onClick={this.handleDelete(recipe)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    )

    return(
      <div className="recipe-list">
        <Link
          className="link-add-recipe"
          to="/recipes/new">Add a new recipe</Link>

        { display }
      </div>
    )
  }
};

export default MyRecipes;
