/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useMemo } from 'react';
import { Animated, SafeAreaView, StatusBar, View, Platform, Text } from 'react-native';
import NameListItem, { deviceWidth } from './NameListItem';
import SearchComponent from './SearchComponent';
import { deviceHeight } from './LoaderComponent';
import mockList from './helpers/mockList';
import 'react-native-gesture-handler';

// console.disableYellowBox = true;

const SearchBox = () => {
    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
    const [searchedTerm, setSearchedTerm] = useState('');
    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollYValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            new Animated.Value(0),
        ),
        0,
        50,
    )
    const usersList = useMemo(() => {
        if (searchedTerm.length === 0) {
            return mockList;
        }
        const list = mockList.filter((name) => {
            return name.includes(searchedTerm)
        });
        return list;
    }, [searchedTerm])
    return (
        <Animated.View style={{
            backgroundColor: 'white',
            flex: 1,
        }}>
            <StatusBar barStyle="dark-content" backgroundColor='white' translucent={true} />
            <View style={{ height: Platform.OS === 'ios' ? StatusBar.currentHeight + 50 : 30 }}></View>
            <View style={{ position: 'relative' }}>
                {Platform.OS === 'ios' && (
                    <SearchComponent searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} clampedScroll={clampedScroll} />
                )}
                <Animated.ScrollView
                    stickyHeaderIndices={Platform.OS === 'android' ? [0] : []}
                    showsVerticalScrollIndicator={false}
                    style={{
                        backgroundColor: 'white',
                        paddingTop: Platform.OS === 'ios' ? 70 : 0
                    }}
                    contentContainerStyle={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        backgroundColor: 'white',
                    }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
                        { useNativeDriver: true },
                        () => { },          // Optional async listener
                    )}>
                    {Platform.OS === 'android' && (
                        <SearchComponent searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} clampedScroll={clampedScroll} />
                    )}
                    {usersList.length === 0 && <Text style={{ textAlign: 'center', width: deviceWidth, fontSize: 18, paddingTop: 20 }}>No results for {searchedTerm}</Text>}
                    {usersList.map((name, index) => <NameListItem key={index} name={name} />)}
                    <View style={{ height: deviceHeight * 0.5 }}></View>
                </Animated.ScrollView>
            </View>
        </Animated.View>
    );
};

export default SearchBox;
