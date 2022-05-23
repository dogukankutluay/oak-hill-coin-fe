const { LOGIN, LOGOUT, REGISTER } = require('redux/types');

const INITIAL_STATE = {
  token: '',
  userInfo: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: '',
        userInfo: {},
      };
    case REGISTER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
