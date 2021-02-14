import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  AppRegistry,
  Linking,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

// const PaymentScanQRScreen = ({navigation}) => {
//   return (
//     <View style={styles.outerContainer}>
//       <View style={styles.innerContainer}>
//         <View style={styles.cardsWrapper}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.goBack();
//             }}>
//             <Ionicons
//               name="chevron-back-outline"
//               size={30}
//               style={{color: 'rgba(150, 150, 150, 1)', marginTop: 5}}
//             />
//           </TouchableOpacity>
//           <Text
//             style={{
//               alignSelf: 'center',
//               fontSize: 24,
//               fontFamily: 'Kanit-Bold',
//               color: '#333',
//             }}>
//             QRCode
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   outerContainer: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'rgba(255, 99, 71, 0.5)',
//   },
//   innerContainer: {
//     flex: 1,
//     borderRadius: 10,
//     backgroundColor: 'white',
//   },
//   cardsWrapper: {
//     marginTop: 10,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 100,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 8,
//     borderBottomLeftRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRightWidth: 0,
//   },
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontSize: 15,
//     fontFamily: 'Kanit-Bold',
//   },
//   cardDetails: {
//     fontFamily: 'Kanit-Regular',
//     fontSize: 12,
//     color: '#444',
//   },
// });
// export {PaymentScanQRScreen};

class PaymentScanQRScreen extends React.Component {
  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) => alert('An error occured', err));
  };

  render() {
    return (
      <QRCodeScanner
        containerStyle={{backgroundColor: '#fff'}}
        onRead={this.onSuccess}
        reactivate={true}
        permissionDialogMessage="Need Permussion To Access Camera"
        reactivateTimeout={10}
        showMarker={true}
        markerStyle={{borderColor: '#fff', borderRadius: 10}}
        bottomContent={
          <TouchableOpacity>
            <Text style={{fontSize: 21, color: 'rgb(0,122,255)'}}>
              Scan QRCode
            </Text>
          </TouchableOpacity>
        }
      />
      // <QRCodeScanner
      //   onRead={this.onSuccess}
      //   flashMode={RNCamera.Constants.FlashMode.torch}
      //   topContent={
      //     <Text style={styles.centerText}>
      //       Go to{' '}
      //       <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
      //       your computer and scan the QR code.
      //     </Text>
      //   }
      //   bottomContent={
      //     <TouchableOpacity style={styles.buttonTouchable}>
      //       <Text style={styles.buttonText}>OK. Got it!</Text>
      //     </TouchableOpacity>
      //   }
      // />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export {PaymentScanQRScreen};
