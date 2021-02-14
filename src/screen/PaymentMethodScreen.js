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
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../assets/styles';

const PaymentMethodScreen = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.cardsWrapper}>
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
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 24,
              fontFamily: 'Kanit-Bold',
              color: '#333',
            }}>
            วิธีชำระเงิน
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
              alert('Coming Soon!');
            }}>
            <View style={styles.cardImgWrapper}>
              <Ionicons
                name="phone-portrait-outline"
                size={50}
                color={'tomato'}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.payFrontCardTitle}>PromptPay</Text>
              <Text style={styles.cardDetails}>
                บัญชีธนาคารที่ลงทะเบียนโดยอ้างอิงจาก หมายเลขประจำตัวประชาชน /
                ผู้เสียภาษี หรือ หมายเลขโทรศัพท์เคลื่อนที่
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              alert('Coming Soon!');
            }}>
            <View style={styles.cardImgWrapper}>
              <Ionicons name="qr-code-outline" size={50} color={'tomato'} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.payFrontCardTitle}>Thai QR Code</Text>
              <Text style={styles.cardDetails}>
                QR Code ของธนาคารที่ลงทะเบียนเข้าร่วม Thai QR Code และ PromptPay
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              alert('Coming Soon!');
            }}>
            <View style={styles.cardImgWrapper}>
              <Ionicons name="ios-card-outline" size={50} color={'tomato'} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.payFrontCardTitle}>Credit Card</Text>
              <Text style={styles.cardDetails}>
                รับทุกบัตรที่มีสัญลักษณ์ Visa หรือ Master Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {PaymentMethodScreen};
