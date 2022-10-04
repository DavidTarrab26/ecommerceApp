import React from "react";
import {styles} from "./styles"
import {Ionicons} from "@expo/vector-icons"
import { Text, View, TouchableOpacity } from "react-native";

const CartItem = ({item, onDelete}) => {
    return ( 
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={styles.detail}>Cantidad {item.quantity}</Text>
                </View>
                <TouchableOpacity onPress={()=>onDelete(item)}>
                    <Ionicons name="trash" size={22} color= '#7D8491'/>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default CartItem;