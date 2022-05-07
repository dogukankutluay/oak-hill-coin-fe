import { CHANGE_LANG, HANDLE_NAVBAR } from 'redux/types';

export const changeLanguage = (payload) => {
  return {
    type: CHANGE_LANG,
    payload,
  };
};

export const handleNavbar = (payload) => {
  return {
    type: HANDLE_NAVBAR,
    payload,
  };
};
