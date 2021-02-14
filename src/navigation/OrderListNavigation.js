import 'react-native-gesture-handler';

import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {OrderListScreen} from '../screen/OrderListScreen';
import {MainOrderListDetailScreen} from '../screen/MainOrderListDetailScreen';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createStackNavigator();

function isVisible(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'OrderLists';

  if (routeName == 'OrderLists') {
    return true;
  } else {
    return false;
  }
}

function OrderListNavigation({navigation, route}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: isVisible(route)});
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName={'OrderLists'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OrderLists" component={OrderListScreen} />
      <Stack.Screen
        name="MainOrderListDetail"
        component={MainOrderListDetailScreen}
      />
    </Stack.Navigator>
  );
}
export {OrderListNavigation};
