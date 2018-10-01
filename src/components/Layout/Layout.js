import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends React.Component {
  state = {
    mobile: window.innerWidth < 500,
    showSideDrawer: true
  }

  resizeHandler = () => {
    let width = window.innerWidth;
    this.setState({mobile: width < 500});
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  render () {
    return (
      <Aux>
        <SideDrawer show={this.state.showSideDrawer} close={this.sideDrawerCloseHandler}/>
        <Toolbar mobile={this.state.mobile} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;