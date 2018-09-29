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

  moreIngredientsHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  }

  lessIngredientHandler = (type) => {
    const newIngredients = { ...this.state.ingredients };
    if(newIngredients[type] === 0) return;
    newIngredients[type] = this.state.ingredients[type] -1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({ingredients: newIngredients, totalPrice: newPrice});
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredients={this.state.ingredients} 
          moreHandler={this.moreIngredientsHandler}
          lessHandler={ this.lessIngredientHandler } />
      </Aux>
    );
  }
}

export default BurgerBuilder;