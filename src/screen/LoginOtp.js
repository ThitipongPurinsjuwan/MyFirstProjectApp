import React, {Component} from 'react';
import {Image, Button, colors} from 'react-native-elements';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
class LoginOtp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      otp: '',
      modalVisible: false,
    };
  }
  _storeData = async () => {
    let OTP = '111111';
    try {
      await AsyncStorage.setItem('OTP', OTP);
    } catch (error) {
      // Error saving data
    }
  };
  getData = async () => {
    try {
      const OTP = await AsyncStorage.getItem('OTP');
      if (OTP !== null) {
        this.setState({otp: OTP});
        console.log(OTP);
      }
    } catch (error) {
      alert('kuy');
    }
  };
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  check = (code) => {
    if (code != '111111') {
      this.setModalVisible(true);
    } else {
      console.log('suc');
    }
  };
  componentDidMount() {
    this._storeData;
  }
  render() {
    const {modalVisible} = this.state;

    return (
      <View style={styles.outerContainer}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 30,
                width: 298,
                height: 457,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={require('../assets/no-entry.png')}
                style={{width: 125, height: 125, margin: 20}}
              />
              <Text>หมายเลขที่กรอกไม่ถูกต้อง{this.state.otp}</Text>
              <View>
                <TouchableOpacity onPress={() => this.setModalVisible(false)}>
                  <View style={styles.btn}>
                    <Text>ลองใหม่</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
          <View style={{alignItems: 'center', marginTop: 80}}>
            <Image
              source={require('../assets/password.png')}
              style={{width: 125, height: 125}}
            />
            <Text style={styles.title}>กรอกหมายเลย OTP</Text>
            <Text style={(styles.title, {fontSize: 16})}>
              (รหัสอ้างอิง : XXXX)
            </Text>

            <View style={{marginTop: 50}}>
              <OTPInputView
                style={{width: '80%', height: 58}}
                pinCount={6}
                placeholderCharacter="X"
                codeInputFieldStyle={styles.input}
                placeholderTextColor="gray"
                onCodeFilled={(code) => {
                  this.setState({code: code});
                  console.log(`Code is ${code}, you are good to go!`);
                  this.getData;
                  if (code != this.state.otp) {
                    this.setModalVisible(true);
                    console.log(this.state.otp);
                  } else {
                    console.log(`test2`);
                  }
                }}
              />
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Waiting');
                }}>
                <Text style={styles.title}>{this.state.getData}ยืนยัน</Text>
              </TouchableOpacity>
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
    textAlign: 'center',
  },
  input: {
    width: 58,
    height: 58,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 30,
    margin: 1,
    borderRadius: 10,

    color: '#000000',
  },
  btn: {
    marginTop: 150,
    width: 249,
    height: 57,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    borderColor: 'gray',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export {LoginOtp};
