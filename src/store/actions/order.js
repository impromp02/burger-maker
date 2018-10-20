import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

const getOrders = (orders) => {
  return {
    type: actionTypes.GET_ORDERS,
    payload: orders
  };
}

export const getOrdersAsync = (token, userId) => {
  console.log('in action', userId);
  return dispatch => {
    const queryParam = '?auth='+ token + '&orderBy="userId"&equalTo="' + userId + '"';
    console.log(queryParam);
    axios.get('orders.json' + queryParam)
    .then(res => {
      const fetchedOrders = [];
      for(let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        });
      }
      dispatch(getOrders(fetchedOrders));
    }).catch(error => console.log(error));
  }
}
