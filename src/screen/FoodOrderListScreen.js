import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  Image,
  Button,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {add} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {Checkbox, RadioButton} from 'react-native-paper';
import {StarRating} from '../components/StarRating';
import {SwiperFlat} from '../components/Swiper/SwiperComponent';
var shopUri = [
  'https://www.cookeatfood.com/wp-content/uploads/2019/03/%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%9C%E0%B8%B2%E0%B9%84%E0%B8%82%E0%B9%88%E0%B9%80%E0%B8%84%E0%B9%87%E0%B8%A1.png',
];

const swiperData = [
  {
    bannerUri:
      'https://assets.grab.com/wp-content/uploads/sites/10/2020/04/12233551/Grab-MTC-Blog-1950x700-TH.jpg',
    bannerAvaliable: true,
    targetUri: 'https://google.com',
    targetAvailable: true,
  },
  {
    bannerUri:
      'https://kasikornbank.com/th/promotion/PublishingImages/GrabFood_Banner-th-co-Top.jpg',
    bannerAvaliable: true,
    targetUri: 'https://google.com',
    targetAvailable: true,
  },
  {
    bannerUri:
      'https://assets.grab.com/wp-content/uploads/sites/10/2020/01/28144658/Banks-Partners-Promo-CNY2020-Blog-1.jpg',
    bannerAvaliable: true,
    targetUri: 'https://google.com',
    targetAvailable: true,
  },
  {
    bannerUri:
      'https://www.ktc.co.th/pub/media/Promotion/Dining/dining-food-delivery-grabfoodxmastercard-1448x543_TH.jpg',
    bannerAvaliable: true,
    targetUri: 'https://google.com',
    targetAvailable: true,
  },
  {
    bannerUri:
      'https://assets.grab.com/wp-content/uploads/sites/10/2020/03/23143436/GrabPay-TMB-TBANK-aw_TBANK-Blog-02-1.jpg',
    bannerAvaliable: true,
    targetUri: 'https://google.com',
    targetAvailable: true,
  },
];

export default class FoodOrderListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
          <View style={styles.SwiperFlatContailner}>
            <SwiperFlat item={swiperData} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  SwiperFlatContailner: {
    // width: '100%',
    // height: 'auto's
    padding: 10,
  },
  waitingOrder: {
    backgroundColor: 'rgba(250 ,250 ,250 ,1)',
    position: 'absolute',
    width: '90%',
    height: 80,
    bottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(211, 211, 211, 1)',
    elevation: 10,
  },
});
