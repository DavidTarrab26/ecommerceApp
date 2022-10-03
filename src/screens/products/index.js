import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import ProductsItem from "../../components/products-item";
import { products } from "../../constants/data";
import { styles } from "./styles";

const Products = ({navigation, route}) => {

    const { categoryId } = route.params
    const productsFilter = products.filter(product => product.categoryId === categoryId)
    const renderItem = ({item}) => <ProductsItem item={item} onSelected={onSelected} />
    const onSelected = (item) => {
        navigation.navigate('Product', {name: item.title, productId: item.id})
    }
    return ( 
        <FlatList
            data={productsFilter}
            renderItem={renderItem}
            keyExtractor={item=> item.id.toString()}
        />
     );
}
 
export default Products;