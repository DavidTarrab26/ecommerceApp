import React from "react";
import { FlatList } from "react-native";
import CategoryItem from "../../components/category-item";
import { styles } from "./styles";
import { categories } from "../../constants/data";

const Categories = ({navigation}) => {
    const onSelected = (item) =>{
        navigation.navigate('Productos', {name: item.title, categoryId: item.id})
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected} />
    return ( 
        <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.containerList}
        />
     );
}
 
export default Categories;