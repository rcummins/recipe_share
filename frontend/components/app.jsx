import React from 'react';
import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import CreateRecipeFormContainer from './recipes/create_recipe_form_container';
import RecipeDetailContainer from './recipes/recipe_detail_container';

const App = () => (
  <div className="app">
    <Route path="/" component={NavBarContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <Switch>
      <ProtectedRoute path="/recipes/new" component={CreateRecipeFormContainer} />
      <Route path="/recipes/:recipeId" component={RecipeDetailContainer} />
    </Switch>
  </div>
);

export default App;
