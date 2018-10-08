import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes good!</h1>
      <Burger ingredients={props.ingredients}/>
      <Button btnType="Danger" clicked={props.orderCancel}>CANCEL</Button> 
      <Button btnType="Success" clicked={props.orderContinue}>CONTINUE</Button>
    </div>
    
  );
}

export default CheckoutSummary;