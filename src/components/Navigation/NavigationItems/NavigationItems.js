import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class NavigationItems extends React.Component {
  render() {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        {this.props.isAuthenticated
          ? <NavigationItem link='/logout'>Logout</NavigationItem>
          : <NavigationItem link='/auth' referrer="/">Auth</NavigationItem>
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.idToken !== null
  }
}
export default withRouter(connect(mapStateToProps)(NavigationItems));