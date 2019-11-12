import * as RatingAPIUtil from '../util/rating_api_util';
import { receiveRatingErrors } from './rating_error_actions';

export const RECEIVE_RATING = 'RECEIVE_RATING';

const receiveRating = payload => ({
  type: RECEIVE_RATING,
  payload
});

export const createRating = formRating => dispatch => (
  RatingAPIUtil.createRating(formRating).then(
    payload => dispatch(receiveRating(payload)),
    errors => dispatch(receiveRatingErrors(errors.responseJSON))
  )
);
