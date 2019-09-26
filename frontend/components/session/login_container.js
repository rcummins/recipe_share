import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { clearSessionErrors } from '../../actions/session_error_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formTitle: 'Log in',
  sessionErrors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  submitAction: formUser => dispatch(login(formUser)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
