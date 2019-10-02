import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import RecipeDetailContainer from './recipes/recipe_detail_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import CreateRecipeFormContainer from './recipes/create_recipe_form_container';

const App = () => (
  <div className="app">
    <Route path="/" component={NavBarContainer} />
    <Route path="/recipes/:recipeId" component={RecipeDetailContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/recipes/new" component={CreateRecipeFormContainer} />
  </div>
);

export default App;
