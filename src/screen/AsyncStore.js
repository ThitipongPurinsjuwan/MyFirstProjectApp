/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const { getItem, setItem } = useAsyncStorage('@storage_key');

class App extends Component {

    async componentDidMount() {
        var item = [
            {
                optionTitle: 'วัตถุดิบหลัก',
                condition: {
                    chooseMin: 1,
                    chooseMax: 0,
                },
                data: [
                    { lable: 'หมู', addPrice: 0, checked: false },
                    { lable: 'หมูกรอบ', addPrice: 10, checked: false },
                    { lable: 'เนื้อ', addPrice: 10, checked: false },
                    { lable: 'ไก่', addPrice: 0, checked: false },
                    { lable: 'กุ้ง', addPrice: 15, checked: false },
                    { lable: 'หมึก', addPrice: 15, checked: false }
                ]
            },
            {
                optionTitle: 'เพิ่ม',
                condition: {
                    chooseMin: 0,
                    chooseMax: 0,
                },
                data: [
                    { lable: 'ไข่ดาว', addPrice: 7, checked: false },
                    { lable: 'ไข่เจียว', addPrice: 10, checked: false },
                    { lable: 'ไข่เค็ม', addPrice: 15, checked: false },
                    { lable: 'ไข่เยี่ยวม้า', addPrice: 15, checked: false }
                ]
            },
            {
                optionTitle: 'ปริมาณ',
                condition: {
                    chooseMin: 1,
                    chooseMax: 1,
                },
                data: [
                    { lable: 'น้อย', addPrice: -5, checked: false },
                    { lable: 'ธรรมดา', addPrice: 0, checked: false },
                    { lable: 'พิเศษ', addPrice: 10, checked: false },
                    { lable: 'จัมโบ้', addPrice: 20, checked: false }
                ]
            },
            {
                optionTitle: 'รสชาติ',
                condition: {
                    chooseMin: 1,
                    chooseMax: 1,
                },
                data: [
                    { lable: 'รสอ่อน', addPrice: 0, checked: false },
                    { lable: 'รสธรรมดา', addPrice: 0, checked: false },
                    { lable: 'รสจัด', addPrice: 0, checked: false },
                    { lable: 'เผ็ด', addPrice: 0, checked: false }
                ]
            }
        ]



        var temp = undefined;
        await setItem(JSON.stringify(item))
        temp = await getItem()
        console.log(temp)
    }

    render() {
        // const { count } = this.state;
        return (
            <View>
            </View>
        );
    }
};

export default App;