import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";


const Product = () => {
    const product = useSelector((state) => state.products.selected)

    return ( 
        <View style={styles.container} >
            <Text>id: {product.id}</Text>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>$ {product.price}</Text>
            <Text>Peso: {product.weight}</Text>
        </View>
     );
}
 
export default Product;