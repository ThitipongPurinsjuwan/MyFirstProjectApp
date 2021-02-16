//  ./App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginTelephone} from './src/screen/LoginTelephone';
// import {MainNavigation} from './src/navigation/MainNavigation';
// import {Test} from './src/screen/Test';
import {LoginOtp} from './src/screen/LoginOtp';

const App = () => {
  return (
    <NavigationContainer>
      <LoginTelephone />
      {/* <LoginOtp /> */}
    </NavigationContainer>
  );
};
export default App;
