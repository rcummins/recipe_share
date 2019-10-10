export const RECEIVE_RATING_ERRORS = 'RECEIVE_RATING_ERRORS';
export const CLEAR_RATING_ERRORS = 'CLEAR_RATING_ERRORS';

export const receiveRatingErrors = errors => ({
  type: RECEIVE_RATING_ERRORS,
  errors
});

export const clearRatingErrors = () => ({
  type: CLEAR_RATING_ERRORS
});
