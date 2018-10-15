import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinnner/Spinner';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

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
    loading: false
  };

  inputChangeHandler = (event, id) => {
    const newInputValue = {
        ...this.state.authInputs[id],
        value: event.target.value
    };
    const newAuthInpts = {
      ...this.state.authInputs,
      [id]: newInputValue
    };
    this.setState({authInputs: newAuthInpts});
  }

  formSubmitHandler = () => {
    this.setState({loading: true});
  }

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
      <div style={{width: '60%', margin: 'auto'}}>
        {formInputs}
      </div>
    );
  }
}

export default Auth;