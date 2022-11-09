import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Cart} from "../screens"
import Maps from "../screens/maps";

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return ( 
        <Stack.Navigator         initialRouteName="Cart"
        >
            <Stack.Screen 
                name="Cart" 
                component={Cart}
                options={{
                    title: "Carrito"
                }}
            />
            <Stack.Screen 
                name="Map" 
                component={Maps}
                options={{
                    title: "Mapa"
                }}
            />
        </Stack.Navigator>
     );
}
 
export default CartNavigator;