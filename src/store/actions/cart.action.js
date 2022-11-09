import { cartTypes } from "../types";
import {URL_API} from '../../constants/firebase'
import { URL_GEOCODING } from "../../utils/maps";
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
        const response = await fetch(URL_GEOCODING(location?.lat, location?.lng))
        if(!response.ok) throw new Error("something went wrong!")

        const data = await response.json()

        if(!data.results) throw new Error("something went wrong!")
        const address = data.results[0].formatted_address
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
                    address,
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