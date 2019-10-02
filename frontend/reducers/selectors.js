export const ingredientsArray = ({ ingredients }) => {
  let ingredientIds = Object.keys(ingredients);
  return ingredientIds.map( id => ingredients[id] );
};

export const instructionsArray = ({ instructions }) => {
  let instructionIds = Object.keys(instructions);
  let instructionsUnsorted = instructionIds.map( id => instructions[id] );
  return instructionsUnsorted.sort( (a, b) => a.step_number - b.step_number );
};
