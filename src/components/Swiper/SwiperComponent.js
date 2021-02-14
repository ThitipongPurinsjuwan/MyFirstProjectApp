import React from 'react';
import { TouchableOpacity, Text, Dimensions, Image, StyleSheet, View } from 'react-native';

import { SwiperFlatList } from 'react-native-swiper-flatlist';


class SwiperFlat extends React.Component {

    generateElement() {
        let st = []

        if (this.props.item.length > 0 && this.props.item != null && this.props.item != undefined) {
            this.props.item.map(item => {
                if (item.bannerAvaliable) {
                    st.push(
                        <TouchableOpacity style={[stylesSwiper.child]} onpress={() => { }} key={{}}>
                            <Image
                                source={{ uri: item.bannerUri }}
                                style={stylesSwiper.imgchild}
                            />
                        </TouchableOpacity>
                    )
                }
            })
        } else {
            st.push(
                <TouchableOpacity style={[stylesSwiper.child]} onpress={() => { }} key={{}}>
                    <Image
                        source={require('./defaultBanner.jpg')}
                        style={stylesSwiper.imgchild}
                    />
                </TouchableOpacity>
            )
        }

        return st;
    }

    // openBrowser(uri) {
    //     Linking.canOpenURL(uri).then(supported => {
    //         if (supported) {
    //             Linking.openURL(uri);
    //         } else {
    //             console.log("Don't know how to open URI: " + uri);
    //         }
    //     });
    // }

    render() {
        return (
            <View>
                <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={0} showPagination>
                    {this.generateElement()}
                </SwiperFlatList>
            </View>
        );
    }
}

const { width, height } = Dimensions.get('window');

const stylesSwiper = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    child: {
        height: height * 0.25,
        width,
        justifyContent: 'center',
    },
    imgchild: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: width * 0.25,
        textAlign: 'center',
    },
});

export { SwiperFlat };