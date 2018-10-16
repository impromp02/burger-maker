import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

const getOrders = (orders) => {
  return {
    type: actionTypes.GET_ORDERS,
    payload: orders
  };
}

export const getOrdersAsync = () => {
  return dispatch => {
    axios.get('orders.json')
    .then(res => {
      const fetchedOrders = [];
      for(let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        });
      }
      dispatch(getOrders(fetchedOrders));
    })
  }
}
