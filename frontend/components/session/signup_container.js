import { connect } from 'react-redux';

import {
  createNewUser,
  fetchCurrentUserFavoritesRatings
} from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_error_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formTitle: 'Sign up',
  sessionErrors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  submitAction: formUser => dispatch(createNewUser(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  fetchCurrentUserFavoritesRatings: userId => (
    dispatch(fetchCurrentUserFavoritesRatings(userId))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
