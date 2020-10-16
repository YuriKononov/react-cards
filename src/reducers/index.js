import { combineReducers } from 'redux';

import projectReducer from './projectReducers';
import userReducer from './userReducers';

export default combineReducers({
  users: userReducer,
  projects: projectReducer,
});
