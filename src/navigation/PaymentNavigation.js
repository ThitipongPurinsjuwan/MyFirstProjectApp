import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {PaymentStoreFrontScreen} from '../screen/PaymentStoreFrontScreen';
import {PaymentScanQRScreen} from '../screen/PaymentScanQRScreen';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();

function isVisible(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Payment';

  if (routeName == 'Payment') {
    return true;
  } else {
    return false;
  }
}

function PaymentNavigation({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: isVisible(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName={'Payment'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Payment" component={PaymentStoreFrontScreen} />
      <Stack.Screen name="PaymentQRCode" component={PaymentScanQRScreen} />
    </Stack.Navigator>
  );
}

export {PaymentNavigation};
