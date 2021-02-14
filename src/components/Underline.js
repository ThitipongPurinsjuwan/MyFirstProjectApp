import React, {Component} from 'react';
import {View} from 'react-native';
export default class Underline extends Component {
  render() {
    return (
      <View
        style={{
          borderColor: '#ccce',
          borderWidth: 0.6,
          marginBottom: 15,
          marginTop: 8,
        }}
      />
    );
  }
}
