import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { Login2, Home, PointCharge } from '../pages';

const AuthRoute = (props) => {
  const isAuthenticated = useAuth();
  const location = useLocation();

  if (isAuthenticated) {
    return <Redirect to={location.state.from ?? '/'} />;
  } else {
    return <Route {...props} />;
  }
};

const AppRoute = (props) => {
  const isAuthenticated = useAuth();

  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return (
      <Redirect
        // ログイン後同じstateへ復帰する用に元stateを指定
        to={{ pathname: '/login', state: { from: props.location.pathname } }}
      />
    );
  }
};

const RouterSwitch = () => {
  return (
    <Switch>
      <AuthRoute exact path="/login" component={Login2} />
      <AppRoute exact path="/" component={Home} />
      <AppRoute path="/point-charge" component={PointCharge} />
    </Switch>
  );
};

export default RouterSwitch;
