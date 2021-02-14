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
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../assets/styles';

export class PaymentStoreFrontScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.cardsWrapper}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Ionicons
                name="chevron-back-outline"
                size={30}
                style={{color: 'rgba(150, 150, 150, 1)', marginTop: 5}}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 24,
                fontFamily: 'Kanit-Bold',
                color: '#333',
              }}>
              ชำระเงินหน้าร้าน
            </Text>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                alert('CASH');
              }}>
              <View style={styles.cardImgWrapper}>
                <Ionicons name="cash-outline" size={50} color={'tomato'} />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.payFrontCardTitle}>เงินสด</Text>
                <Text style={styles.cardDetails}>
                  สามารถชำระโดยตรงที่หน้าร้านและ
                  โปรดตรวจสอบรายการในระบบหลังชำระเงินเสร็จ
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                this.props.navigation.navigate('PaymentQRCode');
              }}>
              <View style={styles.cardImgWrapper}>
                <Ionicons name="wallet-outline" size={50} color={'tomato'} />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.payFrontCardTitle}>กระเป๋าเงิน EBESIM</Text>
                <Text style={styles.cardDetails}>
                  สามารถชำระโดยตรงที่หน้าร้านและ
                  โปรดตรวจสอบรายการในระบบหลังชำระเงินเสร็จ
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
