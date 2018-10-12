import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinnner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        type: 'text',
        placeholder: 'Your Name',
        value: ''
      },
      email: {
        type: 'email',
        placeholder: 'Your Email',
        value: ''
      },
      street: {
        type: 'text',
        placeholder: 'Your Address',
        value: ''
      },
      pin: {
        type: 'text',
        placeholder: 'PIN Code',
        value: ''
      },
      delivery: {
        type: 'select',
        options: ['fastest', 'cheapest'],
        value: 'fastest'
      },
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    
    this.setState({loading: true});
    const dataToSend = {};
    for (let key in this.state.orderForm) {
      dataToSend[key] = this.state.orderForm[key].value;
    }
      dataToSend.ingredients = this.props.ingredients;
      dataToSend.totalPrice = this.props.totalPrice;

    axios.post('/orders.json', dataToSend)
    .then(() => {
      this.setState({loading: false})
      this.props.history.push('/');
    })
    .catch(err => this.setState({loading: false}));
  }

  inputChangeHandler = (event, inputFieldId) => {
    const inputField = this.state.orderForm[inputFieldId];
    const newFieldValue = {...inputField, value: event.target.value};
    const newOrderForm = {...this.state.orderForm, [inputFieldId]:newFieldValue};
    this.setState({orderForm: newOrderForm});
  }

  render() {
    const formInputsArray = [];
    for(let key in this.state.orderForm) {
      formInputsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let formInputs = null;

    if(this.state.loading) {
      formInputs = <Spinner/>;
    } else {
      formInputs = <form onSubmit={this.orderHandler}>
        {formInputsArray.map(input => {
          return <Input change={(event) => this.inputChangeHandler(event, input.id)} key={input.id} attr={input} />
        })}
        <Button btnType="Success" >Order</Button>
      </form>
    }

    return (
      <div className={classes.ContactData}>
        <h3>Enter your contact info</h3>
        {formInputs}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}
export default connect(mapStateToProps)(ContactData);