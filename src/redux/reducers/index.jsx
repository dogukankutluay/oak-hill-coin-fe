import { combineReducers } from 'redux';
import preferencesReducer from './preferencesReducer';
import userReducer from './userReducer';
export default combineReducers({
  preferences: preferencesReducer,
  user: userReducer,
});
