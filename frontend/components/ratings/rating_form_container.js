import { connect } from 'react-redux';

import { createRating } from '../../actions/rating_actions';
import RatingForm from './rating_form';

const mapStateToProps = ( state, ownProps ) => ({
  recipeId: ownProps.recipeId,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createRating: formRating => dispatch(createRating(formRating))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingForm);
