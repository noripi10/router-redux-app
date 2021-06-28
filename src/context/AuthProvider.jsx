import React, { createContext, useContext } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionLogin, actionLogout, actionLoginThunk } from '../store/actions/auth';

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const { auth, actionLogin, actionLogout, children } = props;

  const isAuthenticated = auth && auth.USER_ID !== null;

  const login = (userID) => {
    actionLogin(userID);
  };

  const loginThunk = async (userID) => {
    await actionLoginThunk(userID);
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
export const useLoginThunk = () => useContext(AuthContext).loginThunk;
export const useLogout = () => useContext(AuthContext).logout;

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ actionLogin, actionLogout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
