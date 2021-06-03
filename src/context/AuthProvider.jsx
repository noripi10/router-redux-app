import React, { createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionLogin, actionLogout } from '../store/actions/auth';

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const { auth, actionLogin, actionLogout, children } = props;

  const isAuthenticated = auth && auth.USER_ID !== null;

  const login = (USER_ID) => {
    actionLogin(USER_ID);
  };

  const logout = () => {
    actionLogout();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext).isAuthenticated;
export const useLogin = () => useContext(AuthContext).login;
export const useLogout = () => useContext(AuthContext).logout;

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ actionLogin, actionLogout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
