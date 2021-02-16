import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Button,
} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  facebookLogin() {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../image/logo.png')} />
        <Text style={styles.titleText}>Ebesim Food</Text>
        <Text style={styles.baseText}>
          เปลี่ยนรายจ่ายประจำวัน
          {'\n'}
          ให้เป็นรายได้
        </Text>
        <TouchableOpacity
          onPress={() => {
            alert('ลงทะเบียน');
          }}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>ลงทะเบียน</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('LoginTelephone');
          }}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
        <Text style={styles.TextAbout}>Or signin with</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={this.facebookLogin}>
            <Image
              style={styles.icon}
              source={require('../image/facebook.png')}
            />
          </TouchableOpacity>
          <Image style={styles.icon} source={require('../image/google.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 89.75,
    height: 89.33,
    resizeMode: 'contain',
  },
  icon: {
    width: 65,
    height: 65,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 25,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 40,
    //        fontWeight: "bold"
    fontFamily: 'Kanit-Regular',
    marginBottom: 50,
  },
  baseText: {
    fontSize: 20,
    fontFamily: 'Kanit-Regular',
    textAlign: 'center',
    marginBottom: 60,
  },
  TextAbout: {
    fontSize: 20,
    fontFamily: 'Kanit-Regular',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    //         color: '#FFFFFF',
    borderColor: 'black',
    height: 57,
    width: 249,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 5,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: 'black',
    paddingVertical: 15,
    fontSize: 16,
    fontFamily: 'Kanit-Regular',
  },
});

export {Login};
