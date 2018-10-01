import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

const Modal = ({show, children, closeModal}) => (
  <Aux>
    <Backdrop show={show} close={closeModal} /> 
    <div className={classes.Modal}
    style={{
      transform: show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: show ? '1' : '0'
    }}>
      {children}
    </div>
  </Aux>
  
);

export default Modal;