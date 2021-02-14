import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  Button,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SwiperFlat} from '../components/Swiper/SwiperComponent';
import {FastMenu} from '../components/FastMenu';
import {RandomMenu} from '../components/RandomMenu';

import styles from '../assets/styles';

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

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrderWaitingNow: true,
    };
  }

  OrderWaitingNow() {
    if (this.state.isOrderWaitingNow) {
      return (
        <View style={styles.waitingOrder}>
          <TouchableOpacity
            onPress={() => {
              this.setState({isOrderWaitingNow: false});
            }}
            style={{position: 'absolute', right: 5, zIndex: 10}}>
            <Ionicons
              name="close-circle-outline"
              size={20}
              style={{color: 'gray', marginTop: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
            }}>
            <View
              style={{
                position: 'relative',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Ionicons
                name="ios-fast-food-outline"
                color={'tomato'}
                size={50}
                style={{color: 'gray', marginTop: 5}}
              />
            </View>
            <View
              style={{
                position: 'relative',
                flexGrow: 1,
                alignItems: 'flex-start',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontFamily: 'Kanit-Regular',
                  fontSize: 15,
                  color: 'gray',
                }}>
                ก๋วยเตี๋ยวเมืองทองC5
              </Text>
            </View>
            <View
              style={{
                position: 'relative',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 25,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'Kanit-Regular',
                    fontSize: 15,
                    color: 'gray',
                  }}>
                  THB
                </Text>
                <Text
                  style={{
                    fontFamily: 'Kanit-Regular',
                    fontSize: 22,
                    color: 'gray',
                  }}>
                  {' '}
                  100
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Kanit-Regular',
                    fontSize: 15,
                    color: 'gray',
                  }}>
                  Waiting 15 min
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <SafeAreaView
        SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView>
          <View style={styles.SwiperFlatContailner}>
            <SwiperFlat item={swiperData} />
          </View>
          <FastMenu _navigation={this.props.navigation} />
          <RandomMenu _navigation={this.props.navigation} />
        </ScrollView>
        {this.OrderWaitingNow()}
      </SafeAreaView>
    );
  }
}
