import React from 'react';

import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux';

const OrderSummary = ({ingredients, closeModal, price}) => {
  const orderItems = Object.keys(ingredients)
    .map(igKey => {
      return <li key={igKey}>{igKey}: {ingredients[igKey]}</li>
    })
  return (
    <Aux>
      <h3>Here is your Order:</h3>
      <ul>
        {orderItems}
      </ul>
      <p><strong>Total Price: {price}</strong></p>
      <p>Do you want to continue?</p>
      <Button btnType="Danger" clicked={closeModal}>Cancel</Button>
      <Button btnType="Success" clicked={() => alert('YOu\'re fucking done!')}>Continue</Button>
    </Aux>
  );
}

export default OrderSummary;