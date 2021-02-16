import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {add} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {Checkbox, RadioButton} from 'react-native-paper';
import {StarRating} from '../components/StarRating';
import {Button} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '1072394684388-a5187uvnanfhgp1jobhhajg7lpt6suqv.apps.googleusercontent.com',
  offlineAccess: true,
});

class LoginTelephone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      contry: '+66',
      userGoogleInfo: {},
      loaded: false,
    };
  }

  save = async () => {
    await AsyncStorage.setItem('Phone', this.state.phone);
    await AsyncStorage.setItem('Contry', this.state.contry);
  };
  getitem = async () => {
    const test = await AsyncStorage.getItem('Phone');
    this.setState({phone: test});
  };
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo: userInfo,
        loaded: true,
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Icon
              name="chevron-back-outline"
              size={50}
              style={{marginLeft: 20, marginTop: 10}}
            />
          </TouchableOpacity>
          <View style={{margin: 50, marginTop: 50}}>
            <Text style={styles.title}>ยินดีต้อนรับกลับมา.....</Text>
            <Text style={styles.title}>ขอให้มีความสุขกับการกินนะ....</Text>
            <View style={{marginTop: 50}}>
              <Text style={(styles.title, {fontSize: 14})}>
                หมายเลขโทรศัพท์
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 47,
                    width: 78,
                    marginRight: 10,
                    borderWidth: 1,
                    borderRadius: 9,
                  }}>
                  <Image
                    source={require('../assets/thailand-flag-icon-256.png')}
                    style={{
                      height: 20,
                      width: 30,
                      margin: 5,
                    }}
                  />
                  <Text>+66</Text>
                </View>
                <TextInput
                  style={{
                    height: 47,
                    width: 240,

                    borderWidth: 1,
                    flex: 1,
                    borderRadius: 9,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 15,
                  }}
                  placeholder="xxx-xxxxx"
                  keyboardType="phone-pad"
                  maxLength={9}
                  onChangeText={(text) => this.setState({phone: text})}
                />
              </View>
              <View style={(styles.btnsignin, styles.title, {marginTop: 100})}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => {
                    this.props.navigation.navigate('LoginOtp');
                  }}>
                  <View style={styles.btnlogo}>
                    <Image
                      source={require('../assets/icons8-phone-96.png')}
                      style={{
                        height: 30,
                        width: 30,
                        backgroundColor: 'gray',
                        borderRadius: 15,
                        padding: 10,
                      }}
                    />
                  </View>
                  <View style={styles.btnsignin}>
                    <Text>เข้าสู่ระบบด้วยหมายเลขโทรศัพท์</Text>
                  </View>
                </TouchableOpacity>
                <Text style={(styles.title, {marginTop: 30})}>
                  ──────────── หรือ ───────────
                </Text>
              </View>
              <View style={(styles.btnsignin, styles.title, {marginTop: 30})}>
                <TouchableOpacity style={{flexDirection: 'row'}}>
                  <View style={styles.btnlogo}>
                    <Image
                      source={require('../assets/f_logo_RGB-Blue_1024.png')}
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 20,
                        margin: 10,
                      }}
                    />
                  </View>
                  <View style={styles.btnsignin}>
                    <Text>Sign in with Facebook</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={(styles.btnsignin, styles.title, {marginTop: 30})}>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={this.signIn}>
                  <View style={styles.btnlogo}>
                    <Image
                      source={require('../assets/google_icon_131222.png')}
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 20,
                        margin: 10,
                      }}
                    />
                  </View>
                  <View style={styles.btnsignin}>
                    <Text>Sign in with Google</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
    // backgroundColor: 'rgba(111, 111, 111, 0.5)',
    backgroundColor: 'rgba(255, 99, 71, 0.5)',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Kanit-Regular',
    fontSize: 20,
  },
  input: {},
  btnsignin: {
    borderWidth: 1,
    flex: 1,
    width: 279,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  btnlogo: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 41,
    borderRightWidth: 0,
    width: 50,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export {LoginTelephone};
