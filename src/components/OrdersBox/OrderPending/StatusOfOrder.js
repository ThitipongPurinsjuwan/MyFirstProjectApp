import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
export default class StatusOfOrder extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          alert('comm');
        }}
        style={{
          height: 28,
          backgroundColor: '#fff',
          borderColor: 'red',
          borderWidth: 1,
          borderRadius: 40,
          justifyContent: 'center',
        }}>
        <View>
          <Text
            style={{
              color: 'red',
              alignSelf: 'center',
              fontSize: 13,
              fontFamily: 'Kanit-Regular',
            }}>
            ยกเลิกคำสั่งซื้อ
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
