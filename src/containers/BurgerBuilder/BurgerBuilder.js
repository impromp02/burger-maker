import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasable: false,
    totalPrice: 20
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({purchasable: sum > 0});
  }

  moreIngredientsHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients);
  }

  lessIngredientHandler = (type) => {
    const newIngredients = { ...this.state.ingredients };
    if(newIngredients[type] === 0) return;
    newIngredients[type] = this.state.ingredients[type] -1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({ingredients: newIngredients, totalPrice: newPrice});
    this.updatePurchaseState(newIngredients);
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredients={this.state.ingredients} 
          moreHandler={this.moreIngredientsHandler}
          lessHandler={ this.lessIngredientHandler }
          disabledInfo={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable} />
      </Aux>
    );
  }
}

export default BurgerBuilder;