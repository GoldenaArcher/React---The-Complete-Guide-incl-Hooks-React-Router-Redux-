import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    // convert object to array
    let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                // create an array of BurgerIngredient
                return [...Array(props.ingredients[igKey])].map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                });
            }).reduce((arr, el) => {
                return arr.concat(el);
            }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredents!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;