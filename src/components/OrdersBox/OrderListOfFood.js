import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Underline from '../Underline';

export default class OrderListOfFood extends Component {
  render() {
    const {
      numberList,
      name,
      price,
      toping,
      special,
      moreDetail,
    } = this.props.data;
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={{color: '#444', fontSize: 13}}>x{numberList}</Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 10,
            }}>
            <Text style={{color: '#444', fontSize: 13}}>{name}</Text>
            <Text
              style={{
                color: '#444',
                fontSize: 13,
                position: 'absolute',
                alignSelf: 'flex-end',
                right: 20,
              }}>
              {price}
            </Text>
            <Text style={{color: '#444', fontSize: 13}}>{toping}</Text>
            <Text style={{color: '#444', fontSize: 13}}>{special}</Text>
            <Text style={{color: '#444', fontSize: 13}}>{moreDetail}</Text>
          </View>
        </View>
        <Underline />
      </>
    );
  }
}
