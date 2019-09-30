import {
  RECEIVE_INGREDIENTS,
  RECEIVE_INGREDIENT,
  REMOVE_INGREDIENT
} from '../actions/ingredient_actions';

const ingredientsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;
  switch(action.type) {

    case RECEIVE_INGREDIENTS:
      newState = {};
      action.ingredients.forEach(ingredient => (
        newState[ingredient.id] = ingredient
      ));
      return newState;

    case RECEIVE_INGREDIENT:
      let newIngredient = {};
      newIngredient[action.ingredient.id] = action.ingredient;
      return Object.assign({}, oldState, newIngredient);

    case REMOVE_INGREDIENT:
      newState = Object.assign({}, oldState);
      delete newState[action.ingredient.id];
      return newState;

    default:
      return oldState;
  }
};

export default ingredientsReducer;
