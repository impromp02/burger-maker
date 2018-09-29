import React from 'react';

import classes from './BuildControl.css';

const BuildControl = ({label, type, more, less}) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button className={classes.Less} onClick={() => less(type)}>Less</button>
      <button className={classes.More} onClick={() => more(type)}>More</button>
    </div>
  );
}

export default BuildControl;