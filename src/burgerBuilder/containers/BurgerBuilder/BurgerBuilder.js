import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../../axios-order';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount() {
        console.log(this.props)
        // axios.get('https://react-d3e12.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(error => {
        //         // set something specific here to handle the error
        //         this.setState({error: true,})
        //     });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        // since orderSummary relies on ingredients, check for it
        let orderSummary = null;
        // since burger relies on ingredients, check for it
        let burger = this.state.error ? <p>Ingredients can't be loaded...</p> : <Spinner />;
        if (this.props.ingredients) {
            burger = (<Aux>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls
                    ingredientAdded={this.props.addIngredient}
                    ingredientRemoved={this.props.removeIngredient}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ingredients)}
                    ordered={this.purchaseHandler}
                    price={this.props.totalPrice} />
            </Aux>)
            orderSummary = <OrderSummary
                ingredients={this.props.ingredients}
                price={this.props.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredientName) => dispatch({
            type: actionTypes.ADD_INGREDIENT,
            ingredientName: ingredientName
        }),
        removeIngredient: (ingredientName) => dispatch({ 
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientName: ingredientName
         }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));