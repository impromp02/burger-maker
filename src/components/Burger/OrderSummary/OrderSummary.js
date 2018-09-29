import React from 'react';

import Aux from '../../../hoc/Aux';

const OrderSummary = ({ingredients}) => {
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
      <p>Do you want to continue?</p>
    </Aux>
  );
}

export default OrderSummary;