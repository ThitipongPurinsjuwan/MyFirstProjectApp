import React from 'react';
import { Text, Dimensions, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FastMenu = (props) => {
    return (
        <View style={stylesFastMenu.categoryContainer}>
            <TouchableOpacity
                style={stylesFastMenu.categoryBtn}
                onPress={() => props._navigation.navigate('ShopDetail')}
            >
                <View style={stylesFastMenu.categoryIcon}>
                    <MaterialCommunityIcons name='silverware-fork-knife' size={30} style={{ color: 'tomato' }} />
                </View>
                <Text style={stylesFastMenu.categoryBtnTxt}>Dish</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={stylesFastMenu.categoryBtn}
            >
                <View style={stylesFastMenu.categoryIcon}>
                    <MaterialCommunityIcons name='cupcake' size={30} style={{ color: 'tomato' }} />
                </View>
                <Text style={stylesFastMenu.categoryBtnTxt}>Desserts</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={stylesFastMenu.categoryBtn}
            >
                <View style={stylesFastMenu.categoryIcon}>
                    <MaterialCommunityIcons name='glass-wine' size={30} style={{ color: 'tomato' }} />
                </View>
                <Text style={stylesFastMenu.categoryBtnTxt}>Drink</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={stylesFastMenu.categoryBtn}
            >
                <View style={stylesFastMenu.categoryIcon}>
                    <MaterialCommunityIcons name='food-apple' size={30} style={{ color: 'tomato' }} />
                </View>
                <Text style={stylesFastMenu.categoryBtnTxt}>Fruit</Text>
            </TouchableOpacity>
        </View>
    )
};

const stylesFastMenu = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});

export { FastMenu };