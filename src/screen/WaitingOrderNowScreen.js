import React from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  Image,
  Button,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class WaitingOrderNowScreen extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('MainNavigation');
    }, 2000);
  }
  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
        <ActivityIndicator size={100} color="black" />
      </View>
    );
  }
}
export {WaitingOrderNowScreen};
