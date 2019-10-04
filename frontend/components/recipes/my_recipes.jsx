import React from 'react';
import { Link } from 'react-router-dom';

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMyRecipes(this.props.currentUser.id);
  }

  render() {
    return(
      <div className="recipe-list">
        <Link
          className="link-add-recipe"
          to="/recipes/new">Add a new recipe</Link>

        <table>

          <thead>
            <tr>
              <th className="col-recipe">Recipe</th>
              <th className="col-rating">Taste rating</th>
              <th className="col-rating">Effort rating</th>
            </tr>
          </thead>

          <tbody>
            {this.props.recipes.map((recipe, index) => (
              <tr key={index}>
                <td className="col-recipe">
                  <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                </td>
                <td className="col-rating">
                  <p>{recipe.average_taste_rating}</p>
                </td>
                <td className="col-rating">
                  <p>{recipe.average_effort_rating}</p>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    )
  }
};

export default MyRecipes;
