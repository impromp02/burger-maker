import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      pin: ''
    }
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h3>Enter your contact info</h3>
        <form action="">
          <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your Email"/>
          <input className={classes.Input} type="text" name="street" placeholder="Street"/>
          <input className={classes.Input} type="text" name="pin" placeholder="PIN" />
          <Button btnType="Success" clicked>Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;