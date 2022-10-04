import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Categories, Products, Product} from "../screens"
 
const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return ( 
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Categories}
                options={{
                    title: "Tienda"
                }}
            />
            <Stack.Screen 
                name="Productos" 
                component={Products}
                options={({ route }) => ({
                    title: route.params.name
                })} 
            />
            <Stack.Screen 
                name="Product" 
                component={Product} 
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
     );
}
 
export default ShopNavigator;