const { CHANGE_LANG, HANDLE_NAVBAR } = require('redux/types');

const INITIAL_STATE = {
  lang: 'en',
  navbar: false,
};

const preferencesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case HANDLE_NAVBAR:
      return {
        ...state,
        navbar: action.payload,
      };
    default:
      return state;
  }
};
export default preferencesReducer;
