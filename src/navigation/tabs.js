import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import OrdersNavigator from "./orders";
import { Ionicons } from "@expo/vector-icons"

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
                    title: "Tienda",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused? "home" : "home-outline"}
                            size={22}
                            color='#7D8491'
                        />
                    )
                }}
            />
            <ButtonTab.Screen 
                name="CartTab"
                component={CartNavigator}
                options={{
                    title: "Carrito",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused? "cart" : "cart-outline"}
                            size={22}
                            color='#7D8491'
                        />
                    )
                }}
                
            />
            <ButtonTab.Screen 
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    title: "Ordenes",
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused? "file-tray-full" : "file-tray-full-outline"}
                            size={22}
                            color='#7D8491'
                        />
                    )
                }}
            />
        </ButtonTab.Navigator>
     );
}
 
export default TabsNavigator;