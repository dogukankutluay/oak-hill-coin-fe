import { CHANGE_LANG } from 'redux/types';

export const changeLanguage = (payload) => {
  return {
    type: CHANGE_LANG,
    payload,
  };
};
