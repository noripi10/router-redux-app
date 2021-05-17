import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persister } from './redux/store';
import { Login, Home, PointCharge } from './pages';
import AuthProvider, { useAuth } from './context/AuthProvider';

const AuthRoute = (props) => {
  const isAuthenticated = useAuth();
  const location = useLocation();

  console.log('location.state.from', location.state.from);
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

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <AuthRoute exact path="/login" component={Login} />
              <AppRoute exact path="/" component={Home} />
              <AppRoute path="/point-charge" component={PointCharge} />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
