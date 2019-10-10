import { connect } from 'react-redux';

import { createRating } from '../../actions/rating_actions';
import { clearRatingErrors } from '../../actions/rating_error_actions';
import RatingForm from './rating_form';

const mapStateToProps = ( state, ownProps ) => ({
  recipeId: ownProps.recipeId,
  currentUser: state.session.currentUser,
  ratingErrors: state.errors.ratingErrors
});

const mapDispatchToProps = dispatch => ({
  createRating: formRating => dispatch(createRating(formRating)),
  clearRatingErrors: () => dispatch(clearRatingErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingForm);
