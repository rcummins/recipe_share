export const RECEIVE_RECIPE_ERRORS = 'RECEIVE_RECIPE_ERRORS';
export const CLEAR_RECIPE_ERRORS = 'CLEAR_RECIPE_ERRORS';

export const receiveRecipeErrors = errors => ({
  type: RECEIVE_RECIPE_ERRORS,
  errors
});

export const clearRecipeErrors = () => ({
  type: CLEAR_RECIPE_ERRORS
});
