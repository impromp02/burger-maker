import React from 'react';

import Logo from '../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';

const Toolbar = ({mobile}) => {
  let toolbarItems = null;
  if(mobile === false) {
    toolbarItems = 
    <Aux>
    <nav>
        <NavigationItems />
      </nav>
      <div className={classes.Logo}>
        <Logo />
      </div>
    </Aux>;

  }
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      {toolbarItems}
      
    </header>
  );
    
}
  

export default Toolbar;