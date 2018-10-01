import React from 'react';

import classes from './Backdrop.css';

const Backdrop = ({show, closeModal}) => (
  show ? <div className={classes.Backdrop} onClick={closeModal}></div> : null
);

export default Backdrop;