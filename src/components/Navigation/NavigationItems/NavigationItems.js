import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Aux from '../../../hoc/Aux';

class NavigationItems extends React.Component {
  render() {
    let items = null;
    if(!this.props.isAuthenticated) {
      items = (
        <Aux>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link='/auth' referrer="/">Auth</NavigationItem>
        </Aux>
      );
    } else {
      items = (
        <Aux>
          <NavigationItem link="/">Burger Builder</NavigationItem>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem link='/logout'>Logout</NavigationItem>
        </Aux>
      );
    }
    return (
      <ul className={classes.NavigationItems}>
        {items}
      </ul> 
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.loggedIn
  }
}
export default withRouter(connect(mapStateToProps)(NavigationItems));