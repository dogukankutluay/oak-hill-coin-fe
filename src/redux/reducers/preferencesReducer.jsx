const { CHANGE_LANG } = require('redux/types');

const INITIAL_STATE = {
  lang: 'en',
};

const preferencesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};
export default preferencesReducer;
