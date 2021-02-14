import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
} from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export class NetworkScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <SafeAreaView style={styles.outerContainer}>
                <ScrollView style={styles.innerContainer}>
                    <View style={styles.mainHeaderContainer}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Ionicons name='chevron-back-outline' size={30} style={{ color: 'rgba(150, 150, 150, 1)', marginTop: 5 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainCenterContainer}>
                        <View style={{ alignItems: 'center', marginBottom: 20 }}>
                            <Text style={{ fontFamily: 'Kanit-Bold', fontSize: 24 }}>เครือข่ายของคุณ</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        padding: 10,
        // backgroundColor: 'rgba(111, 111, 111, 0.5)',
        backgroundColor: 'rgba(255, 99, 71, 0.5)'
    },
    innerContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    mainHeaderContainer: {
        backgroundColor: 'white'
    },
    mainCenterContainer: {
        marginTop: 20
    },
    menuItem: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Kanit-Regular'
    },
    menuItemText: {
        marginLeft: 10,
        fontFamily: 'Kanit-Regular'
    }
});