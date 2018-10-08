import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
     
    const ingredients = {};
    for (let param of query) {
      ingredients[param[0]] = +[param[1]];
    }
    this.setState({ingredients});
  }

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
          ingredients={this.state.ingredients}
          orderContinue={this.orderContinueHandler}
          orderCancel={this.orderCancelHandler} />
        <Route 
          path={this.props.match.path + '/contact-data'} 
          render={(props) => <ContactData ingredients={this.state.ingredients} {...props} />} />
      </div>
    );
  }
}

export default Checkout;