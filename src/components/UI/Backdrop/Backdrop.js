import React from 'react';

import classes from './Backdrop.css';

const Backdrop = ({show, close}) => (
  show ? <div className={classes.Backdrop} onClick={close}></div> : null
);

export default Backdrop;