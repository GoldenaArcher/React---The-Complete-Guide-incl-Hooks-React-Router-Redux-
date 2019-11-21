import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import {Route} from 'react-router-dom';

import ContactData from '../Checkout/ContactData/ContactData';

export class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1, 
            cheese: 1, 
            bacon: 1
        },
        price: 0,
    }

    componentDidMount() {
        const qeury = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        qeury.forEach((value, key) => {
            if (key === 'price') {
                price = value;
            } else {
                ingredients[key] = +value;
            }
        });
        this.setState({ingredients: ingredients, price: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler =() => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} />
            </div>
        )
    }
}

export default Checkout;