import React from 'react';
import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import AllRecipesContainer from './recipes/all_recipes_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import CreateRecipeFormContainer from './recipes/create_recipe_form_container';
import EditRecipeFormContainer from './recipes/edit_recipe_form_container';
import RecipeDetailContainer from './recipes/recipe_detail_container';
import MyRecipesContainer from './recipes/my_recipes_container';
import MyFavoritesContainer from './favorites/my_favorites_container';

const App = () => (
  <div className="app">
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={AllRecipesContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <Switch>

      <ProtectedRoute
        path="/recipes/new"
        component={CreateRecipeFormContainer} />

      <ProtectedRoute
        path="/recipes/:recipeId/edit"
        component={EditRecipeFormContainer} />

      <Route path="/recipes/:recipeId" component={RecipeDetailContainer} />

    </Switch>
    <ProtectedRoute path="/myrecipes" component={MyRecipesContainer} />
    <ProtectedRoute path="/myfavorites" component={MyFavoritesContainer} />
  </div>
);

export default App;
