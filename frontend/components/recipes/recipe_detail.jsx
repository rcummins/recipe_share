import React from 'react';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { recipeId } = this.props.match.params;
    this.props.fetchRecipeDetail(recipeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.recipeId != this.props.match.params.recipeId) {
      const { recipeId } = this.props.match.params;
      this.props.fetchRecipeDetail(recipeId);
    }
  }

  render() {
    const { recipe, ingredients, instructions, author } = this.props;

    if (!recipe || !author) {
      return(<p>Loading...</p>);
    }

    return(
      <div className="recipe-detail">

        <h3>{recipe.title}</h3>

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
      </div>
    );
  }
};

export default RecipeDetail;
