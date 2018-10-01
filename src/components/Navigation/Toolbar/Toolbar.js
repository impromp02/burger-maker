import React from 'react';

import Logo from '../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';

const Toolbar = ({mobile, toggleSideDrawer}) => {
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
      <div onClick={toggleSideDrawer} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {toolbarItems}
    </header>
  );
    
}
  

export default Toolbar;