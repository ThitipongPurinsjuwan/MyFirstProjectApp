import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {StarRating} from './StarRating';

import styles from '../assets/styles';

const RandomMenu = (props) => {
  return (
    <View style={styles.randomMenuCardsWrapper}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        }}>
        Recently Viewed
      </Text>
      <TouchableOpacity
        style={styles.randomMenuCard}
        onPress={() => props._navigation.navigate('FoodOrder')}>
        <View style={styles.randomMenuCardImgWrapper}>
          <Image
            source={require('../assets/banners/food-banner2.jpg')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.randomMenuCardTitle}>Amazing Food Place</Text>
          <StarRating ratings={1.5} reviews={101} />
          <Text style={styles.randomMenuCardDetails}>
            Amazing description for this amazing place
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.randomMenuCard}
        onPress={() => props._navigation.navigate('FoodOrder')}>
        <View style={styles.randomMenuCardImgWrapper}>
          <Image
            source={require('../assets/banners/food-banner3.jpg')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.randomMenuCardTitle}>Amazing Food Place</Text>
          <StarRating ratings={2} reviews={99} />
          <Text style={styles.randomMenuCardDetails}>
            Amazing description for this amazing place
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.randomMenuCard}
        onPress={() => props._navigation.navigate('FoodOrder')}>
        <View style={styles.randomMenuCardImgWrapper}>
          <Image
            source={require('../assets/banners/food-banner4.jpg')}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.randomMenuCardTitle}>Amazing Food Place</Text>
          <StarRating ratings={4} reviews={99} />
          <Text style={styles.randomMenuCardDetails}>
            Amazing description for this amazing place
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {RandomMenu};
