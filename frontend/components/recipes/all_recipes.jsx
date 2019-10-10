import React from 'react';
import { Link } from 'react-router-dom';

class AllRecipes extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  handleChange(e) {
    this.props.receiveSortByMethod(e.target.value);
  }

  render() {
    const { sortedRecipesArray, sortBy } = this.props;

    return(
      <div className="recipe-list-and-sort-by">
        <div className="recipe-list">

        <form className="sort-by">
          <label htmlFor="sort-by-select">Sort recipes by:</label>
          <select
            id="sort-by-select"
            defaultValue={sortBy}
            onChange={this.handleChange}>
            <option value="TASTE_ASC">Taste rating - low to high</option>
            <option value="TASTE_DESC">Taste rating - high to low</option>
            <option value="EFFORT_ASC">Effort rating - low to high</option>
            <option value="EFFORT_DESC">Effort rating - high to low</option>
          </select>
        </form>

          <table>

            <thead>
              <tr>
                <th className="col-recipe">Recipe</th>
                <th className="col-rating">Taste rating</th>
                <th className="col-rating">Effort rating</th>
              </tr>
            </thead>

            <tbody>
              { sortedRecipesArray.map( (recipe, index) => (
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
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    );
  }
};

export default AllRecipes;
