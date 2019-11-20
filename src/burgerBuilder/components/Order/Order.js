import React from 'react';

import style from './Order.module.css'

const Order = (props) => {
    return (
        <div className={style.Order}>
            <p>Ingredients: Salad (1)</p>
            <p>Price: <strong>$5.45</strong></p>
        </div>
    )
}

export default Order
