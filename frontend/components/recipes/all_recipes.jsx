import React from 'react';

import SortByContainer from '../sort_by/sort_by_container';
import RecipeList from './recipe_list';

class AllRecipes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return(
      <div className="recipe-list-and-sort-by">
        <div className="recipe-list">

        <SortByContainer />

        <RecipeList
          sortedRecipesArray={this.props.sortedRecipesArray}
          additionalTHeadCell1={null}
          additionalTHeadCell2={null}
          additionalTBodyCell1={() => null}
          additionalTBodyCell2={() => null} />

        </div>
      </div>
    );
  }
};

export default AllRecipes;
