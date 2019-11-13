import React from 'react';
import { Link } from 'react-router-dom';

import SortByContainer from '../sort_by/sort_by_container';
import RecipeList from './recipe_list';

class MyRecipes extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (!this.props.recipesFetched) {
      this.props.fetchRecipes();
    }
  }

  handleDelete(recipe) {
    return e => {
      e.preventDefault();
      this.props.deleteRecipe({ recipe });
    };
  }

  render() {
    const { myRecipesArraySorted } = this.props;

    const additionalTBodyCell1 = recipe => (
      <td>
        <Link
          className="link-edit-recipe"
          to={`/recipes/${recipe.id}/edit`}>Edit</Link>
      </td>
    );

    const additionalTBodyCell2 = recipe => (
      <td>
        <button
          className="button-delete-recipe"
          onClick={this.handleDelete(recipe)}>Delete</button>
      </td>
    );

    const display = myRecipesArraySorted.length == 0 ? (
      <div className="recipe-list-empty">
        <p>You have not created any recipes.</p>
      </div>
    ) : (
      <div className="recipe-list">

        <SortByContainer />

        <RecipeList
          sortedRecipesArray={myRecipesArraySorted}
          additionalTHeadCell1={<th></th>}
          additionalTHeadCell2={<th></th>}
          additionalTBodyCell1={additionalTBodyCell1}
          additionalTBodyCell2={additionalTBodyCell2} />

      </div>
    )

    return(
      <div className="recipe-list-and-sort-by">

        { display }

        <Link
          className="link-add-recipe"
          to="/recipes/new">Add a new recipe</Link>

      </div>
    )
  }
};

export default MyRecipes;
