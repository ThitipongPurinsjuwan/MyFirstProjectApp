// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { HomeScreen } from "../screen/HomeScreen";
import {HomeNavigation} from '../navigation/HomeNavigation';
import {ProfileNavigation} from '../navigation/ProfileNavigation';
import {PaymentNavigation} from '../navigation/PaymentNavigation';
import {OrderListNavigation} from '../navigation/OrderListNavigation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const iconRender = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName = '';

    if (route.name === 'Home') {
      iconName = focused ? 'ios-home' : 'ios-home-outline';
    } else if (route.name === 'Payment') {
      iconName = focused ? 'wallet' : 'wallet-outline';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'person' : 'person-outline';
    } else if (route.name === 'OrderLists') {
      iconName = focused ? 'book' : 'book-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const MainNavigation = ({navigation, route}) => {
  return (
    <Tab.Navigator
      screenOptions={iconRender}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="OrderLists" component={OrderListNavigation} />
      <Tab.Screen name="Payment" component={PaymentNavigation} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

export {MainNavigation};
