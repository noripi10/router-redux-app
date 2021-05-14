import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogin, actionLogout } from '../redux/actions/auth';

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.USER_ID !== null;
  const dispatch = useDispatch();
  const login = (USER_ID) => {
    dispatch(actionLogin(USER_ID));
    localStorage.setItem('router-redux-auth-user-id', USER_ID);
  };

  const logout = () => {
    dispatch(actionLogout());
    // localStorage.setItem('router-redux-auth-user-id', '');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext).isAuthenticated;
export const useLogin = () => useContext(AuthContext).login;
export const useLogout = () => useContext(AuthContext).logout;

export default AuthProvider;
