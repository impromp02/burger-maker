import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import { connect } from 'react-redux';
import { getOrdersAsync } from '../../store/actions/index';
import Spinner from '../../components/UI/Spinnner/Spinner';

class Orders extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.getAllOrders();
    this.setState({loading: false});
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
    orders: state.allOrders.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllOrders: () => dispatch(getOrdersAsync())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);