import {
  RECEIVE_INSTRUCTIONS,
  RECEIVE_INSTRUCTION,
  REMOVE_INSTRUCTION
} from '../actions/instruction_actions';
import { RECEIVE_RECIPE_DETAIL } from '../actions/recipe_actions';

const instructionsReducer = ( oldState = {}, action ) => {
  Object.freeze(oldState);

  let newState;
  switch(action.type) {

    case RECEIVE_INSTRUCTIONS:
      newState = {};
      action.instructions.forEach( instruction => (
        newState[instruction.id] = instruction
      ));
      return newState;

    case RECEIVE_INSTRUCTION:
      let newInstruction = {};
      newInstruction[action.instruction.id] = action.instruction;
      return Object.assign({}, oldState, newInstruction);

    case REMOVE_INSTRUCTION:
      newState = Object.assign({}, oldState);
      delete newState[action.instruction.id];
      return newState;

    case RECEIVE_RECIPE_DETAIL:
      return Object.assign({}, action.payload.instructions)

    default:
      return oldState;
  }
};

export default instructionsReducer;
