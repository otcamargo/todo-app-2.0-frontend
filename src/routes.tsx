import React from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component, ...rest }: any) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact/>
        <Route component={SignUp} path="/signup" />
        <PrivateRoute path="/home" component={Home} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
