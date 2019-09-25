import { connect } from 'react-redux';

import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formTitle: 'Sign up'
});

const mapDispatchToProps = dispatch => ({
  submitAction: formUser => dispatch(createNewUser(formUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
