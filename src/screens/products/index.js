import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

const Products = ({navigation}) => {
    return ( 
        <View style={styles.container} >
            <Text>LOS PRODUCTOS</Text>
            <Button title="Ver mas" onPress={() => navigation.navigate("Detalle")} />
        </View>
     );
}
 
export default Products;