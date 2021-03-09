import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/login" exact/>
    </BrowserRouter>
  );
}

export default Routes;
