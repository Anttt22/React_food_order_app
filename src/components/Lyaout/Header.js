import React from 'react'
import { Fragment } from 'react';
import mealI from '../../Assets/meals.jpeg'
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>MealApp</h1>
                <HeaderCartButton onClick={props.showCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealI} alt="plate full of meals"/>                 
            </div>

        </Fragment>

    );
}

export default Header;