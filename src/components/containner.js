import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class containner extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Text> textInComponent </Text>
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
});
