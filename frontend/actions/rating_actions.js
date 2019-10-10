import * as RatingAPIUtil from '../util/rating_api_util';
import { receiveRatingErrors } from './rating_error_actions';

export const RECEIVE_RATING = 'RECEIVE_RATING';

const receiveRating = rating => ({
  type: RECEIVE_RATING,
  rating
});

export const createRating = formRating => dispatch => (
  RatingAPIUtil.createRating(formRating).then(
    rating => dispatch(receiveRating(rating)),
    errors => dispatch(receiveRatingErrors(errors.responseJSON))
  )
);
