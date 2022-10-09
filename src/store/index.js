import {createStore, combineReducers} from "redux"
import { ProductsReducer, CategoryReducer } from './reducers'

const rootReducer = combineReducers({
    product: ProductsReducer,
    category: CategoryReducer
})

export default createStore(rootReducer)