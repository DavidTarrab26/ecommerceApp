import {products} from '../../constants/data/products'

const initialState = {
    products: products,
    filteredProducts: [],
    selected: null
}

const ProductsReducer = (state = initialState, action) => {
    return state;
}
 
export default ProductsReducer;