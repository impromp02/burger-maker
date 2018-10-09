import React from 'react';
import classes from './Order.css';

const Order = ({ingredients}) => {
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
      <p>Ingredients: {ingredientOutput}</p>
    </div>   
  );
}

export default Order;