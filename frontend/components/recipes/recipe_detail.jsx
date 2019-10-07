import React from 'react';
import { Link } from 'react-router-dom';

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteRecipe({ recipe: this.props.recipe }).then(
      () => this.props.history.push("/myrecipes")
    );
  }

  render() {
    const { recipe, ingredients, instructions, author } = this.props;

    if (!recipe || !author) {
      return(<p>Loading...</p>);
    }

    let displayAuthorOptions;
    if (this.props.currentUser && this.props.currentUser.id === author.id) {
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

        { displayAuthorOptions }
      </div>
    );
  }
};

export default RecipeDetail;
