import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles'

const CategoryItem = ({item, onSelected}) => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>onSelected(item)}
                style={{...styles.contentContainer, backgroundColor: item.color}}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
     );
}
 
export default CategoryItem;