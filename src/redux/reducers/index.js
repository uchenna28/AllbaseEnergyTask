import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import verifyEmailReducer from './verifyemail.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  verifyEmailList: verifyEmailReducer,
});

export default rootReducer;
