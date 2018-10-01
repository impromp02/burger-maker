import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import classes from './SideDrawer.css';

const SideDrawer = (props) => {
  let addedClasses = [classes.SideDrawer, classes.Close];
  
  if(props.show) {
    addedClasses = [classes.SideDrawer, classes.Open];
  } 
  return (
    <Aux>
      <Backdrop show={props.show} close={props.close}/>
      <div className={addedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;