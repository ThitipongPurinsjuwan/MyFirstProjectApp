import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ProfileScreen} from '../screen/ProfileScreen';
import {PaymentMethodScreen} from '../screen/PaymentMethodScreen';
import {NetworkCustomerNavigation} from '../navigation/NetworkCustomerNavigation';
import {ContactUsScreen} from '../screen/ContactUsScreen';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();
// const navigation = useNavigation();

function isVisible(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Profile';

  if (routeName == 'Profile') {
    return true;
  } else {
    return false;
  }
}

function ProfileNavigation({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: isVisible(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName={'Profile'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="DepositCredit" component={PaymentMethodScreen} />
      <Stack.Screen
        name="NetworkCustomer"
        component={NetworkCustomerNavigation}
      />
      <Stack.Screen name="ContactUs" component={ContactUsScreen} />
    </Stack.Navigator>
  );
}

export {ProfileNavigation};
