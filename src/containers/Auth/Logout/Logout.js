import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/index';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
    if(this.props.location.pathname !== "/") {
      this.props.history.push("/");
    }
  }

  render() {
    return(
      <Redirect to="/" />
    );
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}
export default connect(null, mapDispatchToProps)(Logout);