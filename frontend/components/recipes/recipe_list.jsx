import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = props => {
  const {
    sortedRecipesArray,
    additionalTHeadCell1,
    additionalTHeadCell2,
    additionalTBodyCell1,
    additionalTBodyCell2 } = props;

  return(
    <table>

      <thead>
        <tr>
          <th className="col-recipe">Recipe</th>
          <th className="col-rating">Taste rating</th>
          <th className="col-rating">Effort rating</th>
          { additionalTHeadCell1 }
          { additionalTHeadCell2 }
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
            { additionalTBodyCell1(recipe) }
            { additionalTBodyCell2(recipe) }
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default RecipeList;
