import { connect } from 'react-redux';

import { fetchRecipes } from '../../actions/recipe_actions';
import {
  fetchMyFavorites,
  deleteFavorite } from '../../actions/favorite_actions';
import { myFavoriteRecipesArraySorted } from '../../reducers/selectors';
import MyFavorites from './my_favorites';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  myFavoriteRecipesArraySorted: myFavoriteRecipesArraySorted(state)
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
  fetchMyFavorites: userId => dispatch(fetchMyFavorites(userId)),
  deleteFavorite: favorite => dispatch(deleteFavorite(favorite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyFavorites);
