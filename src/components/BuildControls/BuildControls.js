import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
  const types = Object.keys({...props.ingredients});

  return ( 
  <div className={classes.BuildControls}>
    {types.map(type => {
      return <BuildControl 
        label={type[0].toUpperCase() + type.slice(1)} 
        type={type} 
        key={type}
        more={props.moreHandler} />
    })}
  </div>
);
}
export default BuildControls;