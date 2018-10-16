import { combineReducers } from 'redux';
import burgerReducer from './burgerBuilder';
import orderReducer from './order';
import authReducer from './auth';

const rootReducer = combineReducers({
  burger: burgerReducer, 
  allOrders: orderReducer,
  auth: authReducer
});

export default rootReducer;