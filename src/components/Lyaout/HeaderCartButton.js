import React, { useContext, useEffect, useState } from 'react'
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon"
import CartContext from '../../Store/cart-context'


const HeaderCartButton = (props) => {
  const[buttonIsHighlighted, setbuttonIsHighlighted]=useState(false)
   const cartCtx=useContext(CartContext);

   const {items} = cartCtx

   const numberOfCartItems= items.reduce(
     (currentValue, item)=>{return currentValue+=item.amount;
   }, 0)


const btnClasses=`${classes.button} ${buttonIsHighlighted? classes.bump: ''}`;
useEffect(()=>{
  if(cartCtx.items.length===0){
    return
  }
  setbuttonIsHighlighted(true)

  const timer = setTimeout(()=>{
    setbuttonIsHighlighted(false)
  }, 300)

  return ()=>{
    clearTimeout(timer);
  }
}, [items]);

  return (
    
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>
          Your Cart
        </span>
        <span className={classes.badge}>
          {numberOfCartItems}
        </span>
      </button>
    
  );
}

export default HeaderCartButton;



