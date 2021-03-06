import * as SessionApiUtil from '../util/session_api_util';
import { receiveSessionErrors } from './session_error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_CURRENT_USER_FAVORITES_RATINGS =
  "RECEIVE_CURRENT_USER_FAVORITES_RATINGS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveCurrentUserFavoritesRatings = payload => ({
  type: RECEIVE_CURRENT_USER_FAVORITES_RATINGS,
  payload
});

export const createNewUser = formUser => dispatch => (
  SessionApiUtil.postUser(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const login = formUser => dispatch => (
  SessionApiUtil.postSession(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionApiUtil.deleteSession().then(
    () => dispatch(logoutCurrentUser())
  )
);

export const fetchCurrentUserFavoritesRatings = userId => dispatch => (
  SessionApiUtil.fetchCurrentUserFavoritesRatings(userId).then(
    payload => dispatch(receiveCurrentUserFavoritesRatings(payload))
  )
);
