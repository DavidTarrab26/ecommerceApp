import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {styles} from './styles'

const ProductsItem = ({item, onSelected}) => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>onSelected(item)} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={styles.detail}>Peso: {item.weight}</Text>
                </View>
            </TouchableOpacity>
        </View>
     );
}
 
export default ProductsItem;