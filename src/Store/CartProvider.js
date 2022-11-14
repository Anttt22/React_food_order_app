import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    //debugger
    if (action.type === 'ADD') {
        const updatesItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.proxe * action.item.amount
        const existingCarItemIndex = state.items.findIndex(
            (item => item.id === action.item.id)
        );
        const existingCartItem = state.items[existingCarItemIndex];
        let updatedItems;

        if (existingCartItem) {

            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCarItemIndex] = updatedItems
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatesItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type == 'REMOVE') {       
        const existingCarItemIndex = state.items.findIndex(
            (item => item.id === action.id)
        );
        const existingItem = state.items[existingCarItemIndex];
        const updatedTotalAmount =state.totalAmount-existingItem.price;

        let updatedItems;
        if(existingItem.amount===1){
            updatedItems = state.items.filter(item=>item.id !== action.id);
        }else{
            const updatedItem ={...existingItem, amount: existingItem.amount-1}
            updatedItems=[...state.items];
            updatedItems[existingCarItemIndex] = updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState
}




const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemCartHandler = (item) => {
        //debugger
        dispatchCartAction({ type: 'ADD', item: item })
    }

    const removeItemCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', payload: id })
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    }

    return (

        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    );
}

export default CartProvider;