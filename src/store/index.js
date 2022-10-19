import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { ProductsReducer, CategoryReducer, CartReducer } from './reducers'

const rootReducer = combineReducers({
    product: ProductsReducer,
    category: CategoryReducer,
    cart: CartReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))