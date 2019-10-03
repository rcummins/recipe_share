import {
  RECEIVE_INSTRUCTION,
  REMOVE_INSTRUCTION
} from '../actions/instruction_actions';
import { RECEIVE_RECIPE_DETAIL } from '../actions/recipe_actions';

const instructionsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  switch(action.type) {

    case RECEIVE_INSTRUCTION:
      let newInstruction = {};
      newInstruction[action.instruction.id] = action.instruction;
      return Object.assign({}, oldState, newInstruction);

    case REMOVE_INSTRUCTION:
      let newState = Object.assign({}, oldState);
      delete newState[action.instruction.id];
      return newState;

    case RECEIVE_RECIPE_DETAIL:
      return Object.assign({}, action.payload.instructions)

    default:
      return oldState;
  }
};

export default instructionsReducer;
