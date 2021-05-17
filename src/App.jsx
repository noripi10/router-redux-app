import React from 'react';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persister } from './redux/store';
import { Login, Home, PointCharge } from './pages';
import AuthProvider, { useAuth } from './context/AuthProvider';
import { HeaderBar } from './components';

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

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  console.log({ theme });
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persister}>
        <ThemeProvider {...{ theme }}>
          <CssBaseline />
          <AuthProvider>
            <BrowserRouter>
              <HeaderBar title={'マスターメンテナンス'} />
              <Switch>
                <AuthRoute exact path="/login" component={Login} />
                <AppRoute exact path="/" component={Home} />
                <AppRoute path="/point-charge" component={PointCharge} />
              </Switch>
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
