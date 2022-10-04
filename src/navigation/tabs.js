import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";

const ButtonTab = createBottomTabNavigator()

const TabsNavigator = () => {
    return ( 
        <ButtonTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false
            }}
        >
            <ButtonTab.Screen 
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    title: "Tienda"
                }}
            />
            <ButtonTab.Screen 
                name="CartTab"
                component={CartNavigator}
                options={{
                    title: "Carrito"
                }}
            />
            <ButtonTab.Screen 
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    title: "Ordenes"
                }}
            />
        </ButtonTab.Navigator>
     );
}
 
export default TabsNavigator;