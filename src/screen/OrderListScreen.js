import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Box from '../components/OrdersBox/Box';

import styles from '../assets/styles';

export class OrderListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nameStore: 'ร้านป้าแดง',
          serialNumber: 'EBF-1234567890',
          status: 'กำลังส่ง',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://www.emquartier.co.th/wp-content/uploads/2018/01/980x525-5-1024x549.jpg',
        },
        {
          nameStore: 'ร้านป้าเขียว',
          serialNumber: 'EBF-1234567890',
          status: 'สำเร็จ',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/04/2ambdxg.jpg',
        },
        {
          nameStore: 'ร้านน้องฟ้า',
          serialNumber: 'EBF-1234567890',
          status: 'ล้มเหลว',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/04/dx3e9y.jpg',
        },
        {
          nameStore: 'ร้านแม่ส้ม',
          serialNumber: 'EBF-1234567890',
          status: 'ยกเลิก',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/04/fkdbth.jpg',
        },
        {
          nameStore: 'ร้านลุงดำ',
          serialNumber: 'EBF-1234567890',
          status: 'สำเร็จ',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/04/2ay2rhg.jpg',
        },
        {
          nameStore: 'ร้านอาชมพู',
          serialNumber: 'EBF-1234567890',
          status: 'สำเร็จ',
          date: '01-01-2021 16:45:00',
          credit: 16,
          point: 0.2,
          img:
            'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/04/m0f08d.jpg',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={[styles.cardsWrapper, {paddingTop: 40}]}>
            {/* <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Ionicons
                name="chevron-back-outline"
                size={30}
                style={{color: 'rgba(150, 150, 150, 1)', marginTop: 5}}
              />
            </TouchableOpacity> */}
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 24,
                fontFamily: 'Kanit-Bold',
                color: '#333',
              }}>
              Order List
            </Text>
          </View>
          <SafeAreaView style={{flex: 1, paddingBottom: 10}}>
            {/* <ScrollView style={{marginBottom: 10}}> */}
            <View style={styles.randomMenuCardsWrapper}>
              <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                  <Box data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={(item) => item.nameStore}
              />
            </View>
            {/* </ScrollView> */}
          </SafeAreaView>
        </View>
      </View>
    );
  }
}
