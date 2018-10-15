import { combineReducers } from 'redux';
import burgerReducer from './burgerBuilder';
import orderReducer from './order';

const rootReducer = combineReducers({
  burger: burgerReducer, 
  allOrders: orderReducer
});

export default rootReducer;