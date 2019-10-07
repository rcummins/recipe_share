export const ingredientsArray = ({ ingredients }) => {
  let ingredientIds = Object.keys(ingredients);
  return ingredientIds.map( id => ingredients[id] );
};

export const instructionsArray = ({ instructions }) => {
  let instructionIds = Object.keys(instructions);
  let instructionsUnsorted = instructionIds.map( id => instructions[id] );
  return instructionsUnsorted.sort( (a, b) => a.step_number - b.step_number );
};

export const recipesArray = ({ recipes }) => {
  let recipeIds = Object.keys(recipes);
  return recipeIds.map( id => recipes[id] );
};

export const selectRecipeAuthor = ( state, recipe ) => {
  return recipe ? state.entities.users[recipe.author_id] : null;
};

export const simpleIngredientsArray = ({ ingredients }) => {
  if (!ingredients) {
    return [''];
  }

  let ingredientIds = Object.keys(ingredients);
  return ingredientIds.map( id => ingredients[id].ingredient );
};

export const simpleInstructionsArray = ({ instructions }) => {
  if (!instructions) {
    return [''];
  }

  let instructionIds = Object.keys(instructions);
  let instructionObjsUnsorted = instructionIds.map( id => instructions[id]);
  let instructionObjsSorted =
    instructionObjsUnsorted.sort( (a, b) => a.step_number - b.step_number );
  return instructionObjsSorted.map( obj => obj.instruction );
};
