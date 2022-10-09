import React, {useEffect} from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductsItem from "../../components/products-item";
import {filteredProducts, selectedProduct} from "../../store/actions"

const Products = ({navigation}) => {
    
    const dispatch = useDispatch()

    const selectedCategory = useSelector((state) => state.category.selected)

    const productsFiltered = useSelector((state) => state.products.filteredProducts)
    
    const renderItem = ({item}) => <ProductsItem item={item} onSelected={onSelected} />
    
    const onSelected = (item) => {
        dispatch(selectedProduct(item.id))
        navigation.navigate('Product', {name: item.title, productId: item.id})
    }

    useEffect(() =>{
        dispatch(filteredProducts(selectedCategory.id))
    },[])

    return ( 
        <FlatList
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item=> item.id.toString()}
        />
     );
}
 
export default Products;