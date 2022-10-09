import React from "react";
import { FlatList } from "react-native";
import CategoryItem from "../../components/category-item";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {selectCategory} from "../../store/actions"

const Categories = ({navigation}) => {
    
    const categories = useSelector((state) => state.category.categories)
    
    const dispatch = useDispatch()
    
    const onSelected = (item) =>{
        navigation.navigate('Productos', {name: item.title})
        dispatch(selectCategory(item.id))
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