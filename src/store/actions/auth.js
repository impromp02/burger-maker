import * as actionTypes from './actionsTypes';

export const checkAuthStatus = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    console.log('token found inside checkAuthSTATus');
    if(!token) {
      console.log('dispatching logout');
      dispatch(logout());
    } else {
      const expireTime = localStorage.getItem('expireTime');
      if(expireTime > Date.now()) {
        console.log('dispatching loging');
        dispatch(login(token));
      } else {
        console.log('dipatching logout');
        dispatch(logout());
      }
    }
  };
};

export const login = (token) => {
  return {
    type: actionTypes.LOGIN,
    payload: token
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expireTime');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.LOGOUT
  };
};