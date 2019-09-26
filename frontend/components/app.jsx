import React from 'react';
import { Route } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
  </div>
);

export default App;
