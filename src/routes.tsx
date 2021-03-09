import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/login" exact/>
      <Route component={SignUp} path="/signup" />
    </BrowserRouter>
  );
}

export default Routes;
