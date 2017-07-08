// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import crushReducer from './crush';
import errorReducer from './error';
import { reducer as formReducer } from 'redux-form'
import userReducer from './user'

const rootReducer = combineReducers({
  crushReducer,
  errorReducer,
  userReducer,
  form: formReducer,
  router,
});

export default rootReducer;
