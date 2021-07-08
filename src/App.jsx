import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from './context/AuthProvider';
import store, { persister } from './store';
import { HeaderBar, RouterSwitch } from './components';

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

  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persister}>
        <ThemeProvider {...{ theme }}>
          <CssBaseline />
          <AuthProvider>
            <BrowserRouter>
              <HeaderBar title={'マスターメンテナンス'} />
              <RouterSwitch />
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
