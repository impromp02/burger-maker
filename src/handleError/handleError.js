import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import Modal from '../components/UI/Modal/Modal';

const withError = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentDidMount() {
      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    dismissErrorMessage = () => {
      this.setState({error: null});
    }
    
    render() {
      return (
        <Aux>
          <Modal closeModal={this.dismissErrorMessage} show={this.state.error}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} /> 
        </Aux>
      );
    }
  }
}

export default withError;