import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = ({ingredients, moreHandler, lessHandler, disabledInfo, totalPrice, purchasable}) => {
  const types = Object.keys({...ingredients});

  return ( 
  <div className={classes.BuildControls}>
    <p>Total Price: Rs. {totalPrice.toFixed(2)}</p>
    {types.map(type => {
      return <BuildControl 
        label={type[0].toUpperCase() + type.slice(1)} 
        type={type} 
        key={type}
        more={moreHandler}
        less={lessHandler}
        disabled={disabledInfo[type]} />
        
    })}
    <button disabled={!purchasable} className={classes.OrderButton}>Order Now!</button>
  </div>
);
}
export default BuildControls;