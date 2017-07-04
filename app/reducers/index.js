// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import crushReducer from './crush';
import errorReducer from './error';
import userReducer from './user'

const rootReducer = combineReducers({
  crushReducer,
  errorReducer,
  userReducer,
  router,
});

export default rootReducer;
