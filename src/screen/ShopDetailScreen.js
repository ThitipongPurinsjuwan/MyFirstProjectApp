import React from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  Button,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {StarRating} from '../components/StarRating';

import styles from '../assets/styles';

var shopUri = [
  'https://amarinacademy.com/app/uploads/2017/06/petr-sevcovic-594807-unsplash.jpg',
];

const ShopDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainHeaderContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            style={{color: 'rgba(150, 150, 150, 1)', marginTop: 5}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.mainBodyContainerShop}>
        <View style={{flex: 1}}>
          <Image
            source={{uri: shopUri[0]}}
            resizeMode="contain"
            style={styles.shopImage}
          />
        </View>
      </View>
      <View style={styles.bodyContentContainer}>
        <View style={styles.shopCardInfo}>
          <Text style={styles.cardTitle}>
            Cafe Amazon - Central Changwattana
          </Text>
          <StarRating ratings={5} reviews={101} />
          <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* Official Time */}
              <Ionicons
                name="time-outline"
                size={15}
                style={styles.iconDetail}
              />
              <Text style={styles.cardTitleDetails}>ทุกวัน 10:00-21:00</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardDetailsContainer}>
          <Text style={styles.cardDetailTitleContent}>Introduction</Text>
          <Text style={styles.cardDetailContent}>
            {'\n\t\t\t'}250 Character
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={[
              styles.navigateBtn,
              {marginTop: 20, marginBottom: 5, backgroundColor: 'tomato'},
            ]}>
            <Ionicons name="menu-outline" size={20} style={styles.iconDetail} />
            <Text>สั่งอาหาร</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.navigateBtn,
              {backgroundColor: 'rgba(222, 222, 222, 1)'},
            ]}>
            <Ionicons name="call-outline" size={20} style={styles.iconDetail} />
            <Text>โทรหาร้าน</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('window');
export {ShopDetailScreen};
