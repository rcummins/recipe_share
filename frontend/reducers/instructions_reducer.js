import {
  RECEIVE_INSTRUCTION,
  REMOVE_INSTRUCTION
} from '../actions/instruction_actions';
import { RECEIVE_RECIPES, REMOVE_RECIPE } from '../actions/recipe_actions';

const instructionsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;

  switch(action.type) {

    case RECEIVE_INSTRUCTION:
      return Object.assign({}, oldState, action.instruction);

    case REMOVE_INSTRUCTION:
      newState = Object.assign({}, oldState);
      delete newState[action.instruction.id];
      return newState;

    case RECEIVE_RECIPES:
      return Object.assign({}, action.payload.instructions);

    case REMOVE_RECIPE:
      newState = Object.assign({}, oldState);
      action.payload.instructions.forEach( instruction => {
        delete newState[instruction.id];
      });
      return newState;

    default:
      return oldState;
  }
};

export default instructionsReducer;
