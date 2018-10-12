import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinnner/Spinner';
import withError from '../../withError/withError';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false 
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchasingOrderHandler = () => {
    this.setState({purchasing: true});
  }

  closeModalHandler = () => {
    this.setState({purchasing: false});
  }

  continueButtonHandler = () => {
    const queryParams = [];

    for(let i in this.props.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]));
    }
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disabledInfo = { ...this.props.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} closeModal={this.closeModalHandler}>
          {this.state.loading ? 
            <Spinner/> : 
            <OrderSummary 
            ingredients={this.props.ingredients} 
            closeModal={this.closeModalHandler} 
            price={this.props.totalPrice}
            continueHandler={this.continueButtonHandler} />
          }
        </Modal>
        <Burger ingredients={this.props.ingredients} />
        <BuildControls 
          ingredients={this.props.ingredients} 
          moreHandler={this.props.moreIngredientsHandler}
          lessHandler={ this.props.lessIngredientHandler }
          disabledInfo={disabledInfo}
          totalPrice={this.props.totalPrice}
          purchasable={this.updatePurchaseState(this.props.ingredients)}
          purchased={this.purchasingOrderHandler} />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }; 
};

const mapDispatchToProps = (dispatch) => {
  return {
    moreIngredientsHandler: (ingredient) => dispatch({type: actionTypes.ADD_INGREDIENT, payload: ingredient }),
    lessIngredientHandler: (ingredient) => dispatch({type: actionTypes.REMOVE_INGREDIENT, payload: ingredient})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withError(BurgerBuilder, axios));