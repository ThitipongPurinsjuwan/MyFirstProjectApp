import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import {Login} from '../screen/Login';
import {SplashScreen} from '../screen/SplashScreen';
import {LoginTelephone} from '../screen/LoginTelephone';
import {LoginOtp} from '../screen/LoginOtp';
import {MainNavigation} from '../navigation/MainNavigation';
import {WaitingOrderNowScreen} from '../screen/WaitingOrderNowScreen';

const Stack = createStackNavigator();

function SplashNavigation({navigation, route}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginTelephone" component={LoginTelephone} />
      <Stack.Screen name="LoginOtp" component={LoginOtp} />
      <Stack.Screen name="Waiting" component={WaitingOrderNowScreen} />
      <Stack.Screen name="MainNavigation" component={MainNavigation} />
    </Stack.Navigator>
  );
}

export {SplashNavigation};
