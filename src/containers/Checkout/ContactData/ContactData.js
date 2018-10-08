import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinnner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      pin: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({loading: true});

    axios.post('/orders.json', {
      ingrdients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Vivek',
        address: 'Pune'
      },
      delivery: 'Fastest'
    }).then(() => {
      this.setState({loading: false})
      this.props.history.push('/');
    })
    .catch(err => this.setState({loading: false}));
  }

  render() {
    console.log(this.props)
    let form = (
      <form action="">
          <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your Email"/>
          <input className={classes.Input} type="text" name="street" placeholder="Street"/>
          <input className={classes.Input} type="text" name="pin" placeholder="PIN" />
          <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>
    );
    if(this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h3>Enter your contact info</h3>
        {form}
      </div>
    );
  }
}

export default ContactData;