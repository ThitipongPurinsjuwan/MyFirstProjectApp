import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screen/HomeScreen';
import {FoodOrderScreen} from '../screen/FoodOrderScreen';
import {ShopDetailScreen} from '../screen/ShopDetailScreen';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();
// const navigation = useNavigation();

function isVisible(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  if (routeName == 'Home') {
    return true;
  } else {
    return false;
  }
}

function HomeNavigation({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: isVisible(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FoodOrder" component={FoodOrderScreen} />
      <Stack.Screen name="ShopDetail" component={ShopDetailScreen} />
    </Stack.Navigator>
  );
}

export {HomeNavigation};
