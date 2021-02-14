import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import styles from '../assets/styles';

export class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          {/* <View style={styles.mainHeaderContainer}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <IconIonicons name='chevron-back-outline' size={30} style={{ color: 'rgba(150, 150, 150, 1)', marginTop: 5 }} />
                        </TouchableOpacity>
                    </View> */}
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://static.posttoday.com/media/content/2019/09/05/1F4A465E09344344A3CA7241645E4FB4.jpg',
                }}
                size={80}
              />
              <View style={{marginLeft: 20}}>
                <Title
                  style={[
                    styles.title,
                    {
                      marginTop: 15,
                      marginBottom: 5,
                    },
                  ]}>
                  ลุงเองครับ
                </Title>
                <Caption style={styles.caption}>@prayuth.pm</Caption>
              </View>
            </View>
          </View>

          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                Bangkok, Thailand
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                (+66)2-1111111
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                prayuth.c@thai.gov
              </Text>
            </View>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: '#dddddd',
                  borderRightWidth: 1,
                },
              ]}>
              <Title>140.50</Title>
              <Caption>กระเป๋าเครดิต</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>35.00</Title>
              <Caption>กระเป๋าเงินสด</Caption>
            </View>
          </View>

          <View style={styles.menuWrapper}>
            <TouchableRipple
              onPress={() => {
                this.props.navigation.navigate('DepositCredit');
              }}>
              <View style={styles.menuItem}>
                <Icon name="credit-card" color="tomato" size={25} />
                <Text style={styles.menuItemText}>ฝากเครดิต</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => {
                this.props.navigation.navigate('NetworkCustomer');
              }}>
              <View style={styles.menuItem}>
                <Icon name="account-network" color="tomato" size={25} />
                <Text style={styles.menuItemText}>เครือข่ายของคุณ</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple
              onPress={() => {
                this.props.navigation.navigate('ContactUs');
              }}>
              <View style={styles.menuItem}>
                <Icon name="contacts-outline" color="tomato" size={25} />
                <Text style={styles.menuItemText}>ติดต่อเรา</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="logout" color="tomato" size={25} />
                <Text style={styles.menuItemText}>ออกจากระบบ</Text>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
