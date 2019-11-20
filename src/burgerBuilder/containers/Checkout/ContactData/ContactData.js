import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import style from './ContactData.module.css';

import axios from '../../../../axios-order';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {},
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState({ loading: false });
            } );
    }

    render() {
        let form = (<form>
            <input className={style.Input} type='text' name='name' placeholder='Your Name' />
            <input className={style.Input} type='email' name='email' placeholder='Your Email' />
            <input className={style.Input} type='text' name='street' placeholder='Street' />
            <input className={style.Input} type='text' name='postal' placeholder='Postal Code' />
            <Button className={style.Input} btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={style.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;
