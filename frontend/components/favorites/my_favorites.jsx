import React from 'react';

import SortByContainer from '../sort_by/sort_by_container';
import RecipeList from '../recipes/recipe_list';

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
    const { sortedFavoriteRecipesArray } = this.props;

    const additionalTBodyCell1 = recipe => (
      <td>
        <button
          className="button-delete-favorite"
          onClick={this.handleDelete(recipe)}>Remove from favorites</button>
      </td>
    );

    const display = sortedFavoriteRecipesArray.length == 0 ? (
      <div className="recipe-list-empty">
        <p>You have not added any recipes to your favorites.</p>
        <p>
          Click on any recipe title to go to the recipe details page, where you 
          can add it to your favorites.
        </p>
      </div>
    ) : (
      <div className="recipe-list">

        <SortByContainer />

        <RecipeList
          sortedRecipesArray={sortedFavoriteRecipesArray}
          additionalTHeadCell1={<th></th>}
          additionalTHeadCell2={null}
          additionalTBodyCell1={additionalTBodyCell1}
          additionalTBodyCell2={() => null} />

      </div>
    );

    return(
      <div className="recipe-list-and-sort-by">
        {display}
      </div>
    )
  }
}

export default MyFavorites;
