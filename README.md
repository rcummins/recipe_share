# Recipe Share
See it live: [renata-recipe-share.herokuapp.com](https://renata-recipe-share.herokuapp.com/?utm_source=github&utm_medium=readme&utm_campaign=github)

![Recipe Share preview](https://renatacumminsprojectgifs.s3.amazonaws.com/recipe_share.gif)

## Application description
Recipe Share is an app where you can post cooking recipes and discover new recipes based on their average rating. Recipe Share allows users to:
* Create an account and log in/out
* Create and edit your own recipes
* Rate other recipes on their taste and effort involved
* Sort recipes by rating
* Add recipes to your list of favorites

## Design docs
* [MVP feature list](https://github.com/rcummins/recipe_share/wiki/MVP-feature-list)
* [Database schema](https://github.com/rcummins/recipe_share/wiki/Database-schema)
* [State shape](https://github.com/rcummins/recipe_share/wiki/State-shape)
* [Backend routes](https://github.com/rcummins/recipe_share/wiki/Backend-routes)

## Highlighted features

### Error handing during recipe editing

When a user edits a recipe, they can add or remove ingredients and instructions. I decided that the simplest way to implement this feature is to destroy all preexisting ingredients and instructions and then create new ingredients and instructions based on the submitted form. I knew preexisting ingredients and instructions should not be deleted until the other recipe attributes are updated without errors, so that a user can submit the edit recipe form with an invalid attribute, receive the error message, and then navigate away from the page without any changes being made to the recipe or its associated ingredients and instructions. I used a promise to build the required functionality.

In the React container component for the edit recipe form, I separated the recipe update and the changes to ingredients and instructions into two separate callback functions, submitAction1 and submitAction2:

```JavaScript
//frontend/components/recipes/edit_recipe_form_container.jsx

const mapDispatchToProps = dispatch => ({
  submitAction1: formRecipe => dispatch(updateRecipe(formRecipe)),
  submitAction2: (
      preexistingIngredientIds,
      preexistingInstructionIds,
      formIngredients,
      formInstructions,
      recipeAction
    ) => {

    /* delete all preexisting ingredients and instructions before creating
    new ingredients and instructions based on the edit recipe form */
    preexistingIngredientIds.forEach( id => (
      dispatch(deleteIngredient({ ingredient: { id }}))
    ));
    preexistingInstructionIds.forEach( id => (
      dispatch(deleteInstruction({ instruction: { id }}))
    ));

    /* create new ingredients based on the edit recipe form */
    formIngredients.forEach((formIngredient, index) => {
      let fullIngredientObject = {
        ingredient: {
          recipe_id: recipeAction.recipe.id,
          item_number: index + 1,
          ingredient: formIngredient
        }
      };
      dispatch(createIngredient(fullIngredientObject));
    });

    /* create new instructions based on the edit recipe form */
    formInstructions.forEach((formInstruction, index) => {
      let fullInstructionObject = {
        instruction: {
          recipe_id: recipeAction.recipe.id,
          step_number: index + 1,
          instruction: formInstruction
        }
      };
      dispatch(createInstruction(fullInstructionObject));
    });
  },
  clearRecipeErrors: () => dispatch(clearRecipeErrors())
});
```

In the React presentational component for the edit recipe form, I used a promise to make sure that submitAction2 (making changes to ingredients and instructions) will only be executed after submitAction1 (the asynchronous request to update the recipe) has succeeded:

```JavaScript
//frontend/components/recipes/recipe_form.jsx

handleSubmit(e) {
    e.preventDefault();

    ...

    this.props.submitAction1(formRecipe).then(
      recipeAction => {

        this.props.clearRecipeErrors();

        this.props.submitAction2(
          this.props.preexistingIngredientIds,
          this.props.preexistingInstructionIds,
          this.state.ingredients,
          this.state.instructions,
          recipeAction);

        // redirect to a list of user's authored recipes
        this.props.history.push("/myrecipes");
      }
    );
  }
```

### Custom JSON response to reduce number of API calls

When a new user first navigates to the Recipe Share app, the app needs to fetch all the recipes from the database to display the recipe titles and ratings. I decided to also fetch the associated recipe authors, ingredients and instructions and keep them in the Redux state to avoid having to make additional calls to the API when the user navigates to a page where this additional information is displayed. Recipes, authors (users), ingredients and instructions are all stored in different tables in the database, so I used Active Record's `includes` method to load all the associated records with the minimum number of queries:

```Ruby
# app/controllers/api/recipes_controller.rb

class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.includes(:author, :ingredients, :instructions).all
    render :index
  end

  ...

end
```

Then I used JBuilder to construct a custom JSON response including all the recipes and their authors, ingredients and instructions in the necessary format to allow the data to be inserted directly into the Redux state:

```Ruby
# app/views/api/recipes/index.json.jbuilder

json.recipes do
  @recipes.each do |recipe|
    json.set! recipe.id do
      json.partial! 'api/recipes/recipe', recipe: recipe
    end
  end
end

json.users do
  @recipes.each do |recipe|
    json.set! recipe.author.id do
      json.partial! 'api/users/user', user: recipe.author
    end
  end
end

json.ingredients do
  @recipes.each do |recipe|
    recipe.ingredients.each do |ingredient|
      json.set! ingredient.id do
        json.partial! 'api/ingredients/ingredient', ingredient: ingredient
      end
    end
  end
end

json.instructions do
  @recipes.each do |recipe|
    recipe.instructions.each do |instruction|
      json.set! instruction.id do
        json.partial! 'api/instructions/instruction', instruction: instruction
      end
    end
  end
end
```

## Future
Suggestions to improve Recipe Share are always welcome! Here are some features I would like to add to Recipe Share in the future:
* Changing the number of servings for a recipe dynamically recalculates the quantities of all ingredients
* Recipe authors can upload photos to be shown along with ingredients and instructions
* Recipes can be tagged based on main ingredients, entree/side/dessert, holiday, etc., and users can filter recipes by tags
