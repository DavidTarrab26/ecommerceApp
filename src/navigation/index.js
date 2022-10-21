import React, { useState } from "react";
import {NavigationContainer} from "@react-navigation/native"

import TabsNavigator from "./tabs"
import AuthNavigator from "./auth";

const AppNavigator = () => {
    const [userId, setUserId] = useState(null)
    return ( 
        <NavigationContainer>
            {userId ? <TabsNavigator  /> : <AuthNavigator />}
        </NavigationContainer>
     );
}
 
export default AppNavigator;