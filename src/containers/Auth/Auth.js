import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinnner/Spinner';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { saveToken as saveTokenAction } from '../../store/actions/index';
import classes from './Auth.css';

class Auth extends Component {
  state = {
    authInputs: {
      email: {
        type: 'email',
        placeholder: 'email',
        value: ''
      },
      password: {
        type: 'text',
        placeholder: 'password',
        value: ''
      }
    },
    loading: false,
    error: false
  };

  inputChangeHandler = (event, id) => {
    const newAuthInputs = {
      ...this.state.authInputs,
      [id]: {
        ...this.state.authInputs[id],
        value: event.target.value
      }
    };
    this.setState({authInputs: newAuthInputs});
  };

  authData() {
    this.setState({loading: true});
    return {
      email: this.state.authInputs.email.value,
      password: this.state.authInputs.password.value,
      returnSecureToken: true
    };
  }

  loginHandler() {
    console.log('logging');
    this.setState({loading: true});
    const authData = this.authData();
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBQIRKY7hdRkUHLEbfpK2AAn0K2efiN3YM', authData)
    .then(res => {
      this.setState({loading: false});
      this.props.saveToken(res.data.idToken);
      this.props.history.push(this.props.location.state.referrer);
    }).catch(error => {
      this.setState({loading: false, error: true});
      console.log('login fail', error);      
    });
  }

  signUpHandler() {
    this.setState({loading: true});
    console.log('signing');
    const authData = this.authData();
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBQIRKY7hdRkUHLEbfpK2AAn0K2efiN3YM', authData)
    .then(res => {
      this.setState({loading: false, error: false});
      this.props.saveToken(res.data.idToken);
      this.props.history.push(this.props.location.state.referrer);
    }).catch(error => {
      console.log('signup failed!!!!');
      this.setState({loading: false, error: true});
    });
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    if(this.state.error) {
      this.signUpHandler();
    } else {
      this.loginHandler();
    }
  };

  render() {
    const authInputsArray = [];
    for(let key in this.state.authInputs) {
      authInputsArray.push({
        id: key,
        config: this.state.authInputs[key]
      });
    }

    let formInputs = null;
    if(this.state.loading) {
      formInputs = <Spinner/>
    } else {
      formInputs = <form onSubmit={this.formSubmitHandler}>
          {authInputsArray.map(input => <Input 
            key={input.id} 
            attr={input} 
            change={(event) => this.inputChangeHandler(event, input.id)} />)}
          <Button btnType="Success">Submit</Button>
      </form>;
      
    }

    return (
      <div className={classes.Auth}>
        {this.state.error ? <p style={{color: 'red'}}>Your account was not found. Do you want to Signup?</p>: null}
        {formInputs}
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveToken: (token) => dispatch(saveTokenAction(token))
  };
}
export default connect(null, mapDispatchToProps)(Auth);