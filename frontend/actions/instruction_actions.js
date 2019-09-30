import * as InstructionAPIUtil from '../util/instruction_api_util';

export const RECEIVE_INSTRUCTIONS = 'RECEIVE_INSTRUCTIONS';
export const RECEIVE_INSTRUCTION = 'RECEIVE_INSTRUCTION';
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION';

const receiveInstructions = instructions => ({
  type: RECEIVE_INSTRUCTIONS,
  instructions
});

const receiveInstruction = instruction => ({
  type: RECEIVE_INSTRUCTION,
  instruction
});

const removeInstruction = instruction => ({
  type: REMOVE_INSTRUCTION,
  instruction
});

export const fetchInstructions = recipeId => dispatch => (
  InstructionAPIUtil.fetchInstructions(recipeId).then(
    instructions => dispatch(receiveInstructions(instructions))
  )
);

export const createInstruction = formInstruction => dispatch => (
  InstructionAPIUtil.createInstruction(formInstruction).then(
    instruction => dispatch(receiveInstruction(instruction))
  )
);

export const updateInstruction = formInstruction => dispatch => (
  InstructionAPIUtil.updateInstruction(formInstruction).then(
    instruction => dispatch(receiveInstruction(instruction))
  )
);

export const deleteInstruction = formInstruction => dispatch => (
  InstructionAPIUtil.deleteInstruction(formInstruction).then(
    instruction => dispatch(removeInstruction(instruction))
  )
);
