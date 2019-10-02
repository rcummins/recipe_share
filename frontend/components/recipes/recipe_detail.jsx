import React from 'react';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { recipeId } = this.props.match.params;
    this.props.fetchRecipe(recipeId);
    this.props.fetchIngredients(recipeId);
    this.props.fetchInstructions(recipeId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.recipeId != this.props.match.params.recipeId) {
      const { recipeId } = this.props.match.params;
      this.props.fetchRecipe(recipeId);
      this.props.fetchIngredients(recipeId);
      this.props.fetchInstructions(recipeId);
    }
  }

  render() {
    const { recipe, ingredients, instructions } = this.props;

    if (!recipe || ingredients.length === 0 || instructions.length === 0 ) {
      return(<p>Loading...</p>);
    }

    return(
      <div className="recipe-detail">

        <h2>{recipe.title}</h2>

        <p>Servings: {recipe.servings}</p>

        <section>

          <h3>Ingredients</h3>

          <ul>
            { ingredients.map( (ingredient, index) => (
              <li key={`ingredient-${index}`}>{ingredient.ingredient}</li>
            ))}
          </ul>
        </section>

        <section>

          <h3>Instructions</h3>

          <table>
            <tbody>
              { instructions.map( (instruction, index) => (
                <tr key={`instruction-${index}`}>
                  <td>{instruction.step_number}</td>
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
