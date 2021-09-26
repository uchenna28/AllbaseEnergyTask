import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import customerReducer from './customers.reducers';
import orderReducer from './orders.reducer';
import notificationReducer from './notifications.reducers';
import vendorReducer from './vendors.reducers';
import productReducer from './product.reducer';
import verifyEmailReducer from './product.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  customerList: customerReducer,
  orderList: orderReducer,
  notificationList: notificationReducer,
  vendorList: vendorReducer,
  productList: productReducer,
  verifyEmailList: verifyEmailReducer,
});

export default rootReducer;
