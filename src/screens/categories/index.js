import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";

const Categories = ({navigation}) => {
    return ( 
        <View style={styles.container} >
            <Text style={styles.title}>Categorias!!</Text>
            <Button title="Ver los productos" onPress={() => navigation.navigate("Productos")} />
        </View>
     );
}
 
export default Categories;