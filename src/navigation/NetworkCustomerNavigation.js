import 'react-native-gesture-handler';

import * as React from 'react';
import {
    Button,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NetworkScreen } from "../screen/NetworkScreen";

// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

// function isVisible(route) {
//     const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

//     if (routeName == 'Home') {
//         return true;
//     } else {
//         return false;
//     }
// }


function NetworkCustomerNavigation({ navigation, route }) {
    // React.useLayoutEffect(() => {
    //     navigation.setOptions({ tabBarVisible: isVisible(route) });
    // }, [navigation, route]);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="NetworkHome" component={NetworkScreen} />
        </Stack.Navigator>
    )
}

export { NetworkCustomerNavigation }