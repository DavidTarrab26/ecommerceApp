import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductsItem from "../../components/products-item";
import { styles } from "./styles";
import { filteredProducts, selectedProduct } from "../../store/actions"

const Products = ({navigation}) => {

    const dispatch = useDispatch()
    const selectedCategory = useSelector((state) => state.category.selected)

    const productsFiltered = useSelector((state) => state.product.filteredProducts)
    

    useEffect(()=>{
        dispatch(filteredProducts(selectedCategory.id))
    },[])
    
    
    const onSelected = (item) => {
        dispatch(selectedProduct(item.id))
        navigation.navigate('Product', {name: item.title})
    }
    const renderItem = ({item}) => <ProductsItem item={item} onSelected={onSelected} />


    return ( 
        <FlatList
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item=> item.id.toString()}
        />
     );
}
 
export default Products;