import { connect } from 'react-redux';

import { createRecipe } from '../../actions/recipe_actions';
import RecipeForm from './recipe_form';

const mapStateToProps = state => ({
  formTitle: 'Create a new recipe',
  formSubmitButtonText: 'Create recipe',
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  submitAction: formRecipe => dispatch(createRecipe(formRecipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeForm);
