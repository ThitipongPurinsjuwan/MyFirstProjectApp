import React, {Component} from 'react';
import {View, backgroundColor, Image, color} from 'react-native';
var logo = require('../image/logo.png');
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          resizeMode: 'contain',
        }}>
        <Image source={logo} style={{height: 300, width: 300}}></Image>
      </View>
    );
  }
}
export {SplashScreen};
