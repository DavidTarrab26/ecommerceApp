import React from "react";
import { Button, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductsItem from "../../components/products-item";
import { products } from "../../constants/data";
import { styles } from "./styles";

const Products = ({navigation}) => {

    const selectedCategory = useSelector((state) => state.category.selected)

    console.warn('selectedCategory', selectedCategory)
    /* const productsFilter = products.filter(product => product.categoryId === selectedCategory.id) */
    const renderItem = ({item}) => <ProductsItem item={item} onSelected={onSelected} />
    
    const onSelected = (item) => {
        navigation.navigate('Product', {name: item.title, productId: item.id})
    }


    return ( 
        <FlatList
            data={[]}
            renderItem={renderItem}
            keyExtractor={item=> item.id.toString()}
        />
     );
}
 
export default Products;