import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  formTitle: 'Log in'
});

const mapDispatchToProps = dispatch => ({
  submitAction: formUser => dispatch(login(formUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
