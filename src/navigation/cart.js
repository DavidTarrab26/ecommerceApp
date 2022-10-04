import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Cart} from "../screens"

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
        </Stack.Navigator>
     );
}
 
export default CartNavigator;