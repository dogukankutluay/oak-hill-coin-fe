import { combineReducers } from 'redux';
import preferencesReducer from './preferencesReducer';

export default combineReducers({
  preferences: preferencesReducer,
});
