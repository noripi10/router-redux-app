import React, { createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionLogin, actionLogout, actionLoginThunk } from '../store/actions/auth';

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  // bind済みアクション
  const { auth, actionLogin, actionLogout, actionLoginThunk, children } = props;

  const isAuthenticated = auth && auth.USER_ID !== null;

  const login = (userID) => {
    actionLogin(userID);
  };

  const loginThunk = (userID) => {
    actionLoginThunk(userID);
  };

  const logout = () => {
    actionLogout();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loginThunk }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext).isAuthenticated;
export const useLogin = () => useContext(AuthContext).login;
export const useLogout = () => useContext(AuthContext).logout;
export const useLoginThunk = () => useContext(AuthContext).loginThunk;

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ actionLogin, actionLogout, actionLoginThunk }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
