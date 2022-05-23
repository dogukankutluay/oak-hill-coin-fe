import { LOGIN, LOGOUT, REGISTER } from 'redux/types';

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};
export const register = (payload) => {
  return {
    type: REGISTER,
    payload,
  };
};
export const logout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};
