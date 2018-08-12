import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    // Object.keys() give array of keys, transforms a key/value pair to array
    // https://javascript.info/keys-values-entries
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map(
                (_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                }
            );
        })
        .reduce ((arr, el) => {
            return arr.concat(el)
        }, []);  

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};


export default burger;