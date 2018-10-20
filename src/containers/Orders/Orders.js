import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import { getOrdersAsync } from '../../store/actions/index';
import Spinner from '../../components/UI/Spinnner/Spinner';

class Orders extends Component {
  constructor(props) {
    super(props);
    if(this.props.idToken !== null) {
      const userId = localStorage.getItem('userId');
      this.props.getAllOrders(this.props.idToken, userId);
    } else {
      this.props.history.push("/auth", {referrer: this.props.history.location});
    }
  } 

  render () {
    let order = null;
    if(this.props.orders.length > 0) {
      order = this.props.orders.map(order => 
        <Order 
        key={order.id} 
        ingredients={order.ingredients} 
        totalPrice={order.totalPrice}
        formData={order.formData}/>);
    } else {
      order = <Spinner />;
    }

    return (
      <div>
        {order}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.allOrders.orders,
    idToken: state.auth.idToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllOrders: (token, userId) => dispatch(getOrdersAsync(token, userId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);