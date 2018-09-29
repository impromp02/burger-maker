import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = ({ingredients, moreHandler, lessHandler}) => {
  const types = Object.keys({...ingredients});

  return ( 
  <div className={classes.BuildControls}>
    {types.map(type => {
      return <BuildControl 
        label={type[0].toUpperCase() + type.slice(1)} 
        type={type} 
        key={type}
        more={moreHandler}
        less={lessHandler} />
        
    })}
  </div>
);
}
export default BuildControls;