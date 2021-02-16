// //  ./App.js

// import React from 'react';
// // import {createAppContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { NavigationContainer } from "@react-navigation/native";
// //import { MainNavigation } from "./src/navigation/MainNavigation";
// import SplashScreen from './src/screen/SplashScreen';
// import Login from './src/screen/Login';

// const App = createStackNavigator({
//   SplashScreen: {screen: SplashScreen, navigationOptions: {header: null}},
//   Login: {screen: Login, navigationOptions: {header: null}},
// });
// export default createAppContainer(App);

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SplashNavigation} from './src/navigation/SplashNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <SplashNavigation />
    </NavigationContainer>
  );
};
export default App;
