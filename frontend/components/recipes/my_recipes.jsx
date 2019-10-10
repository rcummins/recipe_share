import React from 'react';
import { Link } from 'react-router-dom';

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchMyRecipes(this.props.currentUser.id);
  }

  handleChange(e) {
    this.props.receiveSortByMethod(e.target.value);
  }

  handleDelete(recipe) {
    return e => {
      e.preventDefault();
      this.props.deleteRecipe({ recipe });
    };
  }

  render() {
    const { sortedRecipesArray } = this.props;

    const display = sortedRecipesArray.length == 0 ? (
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
          {sortedRecipesArray.map((recipe, index) => (
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
      <div className="recipe-list-and-sort-by">

        <div className="recipe-list">

          <form className="sort-by">
            <label htmlFor="sort-by-select">Sort recipes by:</label>
            <select
              id="sort-by-select"
              defaultValue="TASTE_DESC"
              onChange={this.handleChange}>
              <option value="TASTE_ASC">Taste rating - low to high</option>
              <option value="TASTE_DESC">Taste rating - high to low</option>
              <option value="EFFORT_ASC">Effort rating - low to high</option>
              <option value="EFFORT_DESC">Effort rating - high to low</option>
            </select>
          </form>

          { display }
        </div>

        <Link
          className="link-add-recipe"
          to="/recipes/new">Add a new recipe</Link>

      </div>
    )
  }
};

export default MyRecipes;
