import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import OrderListOfFood from '../components/OrdersBox/OrderListOfFood';
import Point from '../components/OrdersBox/Point';

import BtnFailAndCancel from '../components/OrdersBox/OrderFailAndCancel/StatusOrder';
import DetailCancelAndCancel from '../components/OrdersBox/OrderFailAndCancel/DetailOfOrder';
import BtnPending from '../components/OrdersBox/OrderPending/StatusOfOrder';
import DetailPending from '../components/OrdersBox/OrderPending/DetailOfOrder';
import BtnSuccess from '../components/OrdersBox/OrderSuccess/StatusOrder';
import DetailSuccess from '../components/OrdersBox/OrderSuccess/DetailOfOrder';

import styles from '../assets/styles';
const data = {
  nameStore: 'ร้านป้าแดง',
  serialNumber: 'EBF-1234567890',
  status: 'กำลังส่ง',
  date: '01-01-2021 16:45:00',
  credit: 16,
  point: 0.2,
  img:
    'https://www.emquartier.co.th/wp-content/uploads/2018/01/980x525-5-1024x549.jpg',
};

function ShowStatus(status) {
  if (status.status === 'กำลังส่ง') {
    return <BtnPending />;
  } else if (status.status === 'ล้มเหลว' || status.status === 'ยกเลิก') {
    return <BtnFailAndCancel status={status.status} />;
  } else {
    return <BtnSuccess />;
  }
}
function ShowDetail(status) {
  if (status.status === 'กำลังส่ง') {
    return <DetailPending />;
  } else if (status.status === 'ล้มเหลว' || status.status === 'ล้มเหลว') {
    return <DetailCancelAndCancel />;
  } else {
    return <DetailSuccess />;
  }
}

const MainOrderListDetailScreen = ({route, navigation}) => {
  const data = [
    {
      numberList: 1,
      name: 'ข้าวผัด',
      price: 60,
      toping: 'กุ้ง',
      special: 'พิเศษ',
      moreDetail: '-- ไม่มีเพิ่มเติมถึงร้าน --',
    },
    {
      numberList: 2,
      name: 'ข้าวคลุกกะเพรา',
      price: 75,
      toping: 'หมูกรอบ',
      special: 'ธรรมดา',
      moreDetail: 'เผ็ดกลาง',
    },
  ];
  const {status} = route.params;
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={[styles.cardsWrapper, {width: '96%'}]}>
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
          <View
            style={{
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 10,
            }}>
            <Text
              style={{alignSelf: 'flex-start', color: '#444', fontSize: 12}}>
              รหัสการสั่งซื้อ status
            </Text>
            <Text
              style={{
                alignSelf: 'flex-end',
                position: 'absolute',
                color: '#444',
                fontSize: 12,
              }}>
              EBF - 523618456480
            </Text>
          </View>
          <View
            style={[
              styles.randomMenuCard,
              {height: 'auto', marginVertical: 5},
            ]}>
            <View style={[test.cardInfo, {justifyContent: 'center'}]}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    paddingLeft: 2,
                    paddingRight: 14,
                  }}>
                  <Image
                    source={require('../image/fried-rice.png')}
                    resizeMode="cover"
                    style={{height: 45, width: 45}}
                  />
                </View>
                <View style={{width: '50%'}}>
                  <Text style={{color: 'black', fontSize: 13}}>
                    ชวนเชยตามสั่ง - หน้า ม.วลัยลักษณ์
                  </Text>
                  <ShowDetail status={status} />
                </View>
              </View>
              <View
                style={{
                  width: '30%',
                  position: 'absolute',
                  alignSelf: 'flex-end',
                  // marginTop: 30,
                  right: 12,
                }}>
                <ShowStatus status={status} />
              </View>
            </View>
          </View>
          <View
            style={[
              styles.randomMenuCard,
              {height: 'auto', marginVertical: 5},
            ]}>
            <View style={[test.cardInfo, {flex: 1, paddingLeft: 20}]}>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../image/food.png')}
                  resizeMode="cover"
                  style={{height: 26, width: 26}}
                />
                <Text
                  style={{
                    color: '#444',
                    fontSize: 13,
                    position: 'absolute',
                    left: 50,
                  }}>
                  โรงแรมคุ้มสวัสดิ์ ถนนหน้ามหาวิทยาลัยวลัยลักษณ์
                </Text>
              </View>
              <View
                style={{
                  height: 'auto',
                  marginTop: 6,
                  marginBottom: 6,
                  marginLeft: 10,
                }}>
                <Point />
                <Point />
              </View>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={require('../image/placeholder.png')}
                  resizeMode="cover"
                  style={{height: 26, width: 26}}
                />
                <Text
                  style={{
                    color: '#444',
                    fontSize: 13,
                    position: 'absolute',
                    left: 50,
                  }}>
                  โรงพยาบาลศูนย์การแพทย์มหาวิทยาลัยวลัยลักษณ์
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.randomMenuCard,
              {height: 'auto', marginVertical: 5},
            ]}>
            <View style={[test.cardInfo]}>
              <View style={{marginBottom: 10}}>
                <Text style={{color: '#444', fontSize: 13}}>
                  สรุปคำสั่งซื้อ
                </Text>
              </View>
              <View>
                <OrderListOfFood data={data[0]} />
                <OrderListOfFood data={data[1]} />
              </View>
            </View>
          </View>
          <View
            style={[styles.randomMenuCard, {height: 90, marginVertical: 5}]}>
            <View style={[test.cardInfo, {flex: 3}]}>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>ค่าอาหาร</Text>
                <Text style={test.textPrice}>135</Text>
              </View>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>ค่าจัดส่ง</Text>
                <Text style={test.textPrice}>31</Text>
              </View>
              <View style={{marginBottom: 6}}>
                <Text style={{color: '#444', fontSize: 13}}>รวมยอดชำระ</Text>
                <Text style={test.textPrice}>เงินสด ฿ 166</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[test.btnCallCenter]}
            onPress={() => {
              alert('comming soon....');
            }}>
            <View>
              <Text style={test.text}>ติดต่อ Call Center</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const test = StyleSheet.create({
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgb(249,249,249)',
  },
  btnCallCenter: {
    backgroundColor: '#FF6347',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 630,
  },
  text: {
    // fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Kanit-Regular',
  },
  textPrice: {
    color: '#444',
    fontSize: 13,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
  },
});

export {MainOrderListDetailScreen};
