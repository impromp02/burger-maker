import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink 
      activeClassName={classes.active} to={{
      pathname: props.link,
      state: props.referrer
  }} exact>{props.children}</NavLink>
  </li>
);

export default NavigationItem;