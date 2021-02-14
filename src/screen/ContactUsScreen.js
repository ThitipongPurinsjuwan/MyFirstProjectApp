import React from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Title, Caption, Text} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../assets/styles';

export class ContactUsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.contactUsInnerContainer}>
          <View style={styles.contactUsMainHeaderContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon
                name="chevron-back-outline"
                size={30}
                style={{color: 'rgba(150, 150, 150, 1)', marginTop: 5}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.mainCenterContainer}>
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Text style={{fontFamily: 'Kanit-Bold', fontSize: 24}}>
                ติดต่อเรา
              </Text>
            </View>
            <View style={styles.contactUsMenuItem}>
              <IconMaterialCommunity
                name="office-building"
                color="tomato"
                size={25}
                style={{top: -40}}
              />
              <Text style={styles.contactUsMenuItemText}>
                บริษัท อีบีซิม จํากัด{'\n'}
                หมายเลขประจำตัวผู้เสียภาษี 0805563001868{'\n'}
                เลขที่ 207/121 หมู่3 ตำบล ท่าศาลา{'\n'}
                อำเภอ ท่าศาลา จังหวัด นครศรีธรรมราช{'\n'}
                รหัสไปรษณีย์ 80160
              </Text>
            </View>
            <View style={styles.contactUsMenuItem}>
              <IconMaterialCommunity
                name="cellphone"
                color="tomato"
                size={25}
              />
              <Text style={styles.contactUsMenuItemText}>(+66)90-000-0000</Text>
            </View>
            <View style={styles.contactUsMenuItem}>
              <IconMaterialCommunity name="fax" color="tomato" size={25} />
              <Text style={styles.contactUsMenuItemText}>(+66)75-333-333</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
