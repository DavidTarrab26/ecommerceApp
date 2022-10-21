import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { ProductsReducer, CategoryReducer, CartReducer, OrdersReducer } from './reducers'

const rootReducer = combineReducers({
    product: ProductsReducer,
    category: CategoryReducer,
    cart: CartReducer,
    orders: OrdersReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))