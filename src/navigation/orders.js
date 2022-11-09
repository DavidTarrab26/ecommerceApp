import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {Orders} from "../screens"

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return ( 
        <Stack.Navigator initialRouteName="Orders"
        >
            <Stack.Screen 
                name="Orders" 
                component={Orders}
                options={{
                    title: "Ordenes"
                }}
            />
        </Stack.Navigator>
     );
}
 
export default OrdersNavigator;