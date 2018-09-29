import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  meat: 10,
  cheese: 5,
  bacon: 20,
  salad: 8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      cheese: 0,
      bacon: 0,
      salad: 0
    },
    totalPrice: 20
  }

  moreIngredientsHandler = (type) => {  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} moreHandler={this.moreIngredientsHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;