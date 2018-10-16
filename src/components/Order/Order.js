import React from 'react';
import classes from './Order.css';

const Order = ({ingredients, formData, totalPrice}) => {
  console.log('order', formData)
  const ingredientsArr = [];
  for(let ingredient in ingredients) {
    ingredientsArr.push({
      name: ingredient,
      amount: ingredients[ingredient]
    });
  }
  const ingredientOutput = ingredientsArr.map(ig => {
    return <span style={{
      textTransform: 'capitalize',
      display: 'inline-block',
      margin: '0 8px',
      border: '1px solid #ccc'
    }} key={ig.name}>{ig.name} ({ig.amount})</span>
  });

  return (
    <div className={classes.Order}>
      <p><strong>Name: </strong>{formData.name}</p>
      <p><strong>Address: </strong>{formData.street}</p>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Total: {totalPrice}</p>
    </div>   
  );
}

export default Order;