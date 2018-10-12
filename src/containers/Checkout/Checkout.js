import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {

  orderCancelHandler = () => {
    this.props.history.goBack();
  }

  orderContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render () {
    return (
      <div>
        <CheckoutSummary 
          ingredients={this.props.ingredients}
          orderContinue={this.orderContinueHandler}
          orderCancel={this.orderCancelHandler} />

        <Route 
          path={this.props.match.path + '/contact-data'} 
          component={ContactData} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  }
}
export default connect(mapStateToProps)(Checkout);