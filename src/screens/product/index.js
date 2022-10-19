import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { products } from "../../constants/data"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cart.action";


const Product = ({navigation}) => {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.product.selected)

    const addCartItem = () => {
        dispatch(addToCart(product))
    }
    const {id, title, description, price, weight} = product || {}
    return ( 
        <View style={styles.container} >
            <Text>id: {id}</Text>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>$ {price}</Text>
            <Text>Peso: {weight}</Text>
            <Button 
                title="Agregar Al Carrito"
                onPress={addCartItem}
            />
        </View>
     );
}
 
export default Product;