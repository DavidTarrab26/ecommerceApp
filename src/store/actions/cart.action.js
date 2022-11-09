import { cartTypes } from "../types";
import {URL_API} from '../../constants/firebase'
const {ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER} = cartTypes

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item
})

export const removeFromCart = (id) =>({
    type: REMOVE_FROM_CART,
    id
})

export const confirmOrder = (order) =>({
    type: CONFIRM_ORDER,
    order
})

export const confirmCart = (items, total, location) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items,
                    total,
                    location,
                })
            })

            const result = await response.json();

            dispatch({
                type: CONFIRM_ORDER,
                result: result,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}