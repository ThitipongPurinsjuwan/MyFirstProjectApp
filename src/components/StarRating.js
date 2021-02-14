import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StarRating = (props) => {

    // This array will contain our star tags. We will include this
    // array between the view tag.
    let stars = [];
    // Loop 5 times
    for (var i = 1; i <= 5; i++) {
        // set the path to filled stars
        let name = 'star';
        let colour = '#FF8C00'
        // If ratings is lower, set the path to unfilled stars
        if (i > props.ratings) {
            name = 'star-outline';
            // colour = 'transparent'
        }

        // stars.push((<Ionicons name={name} size={15} style={styles.star} key={i} />));
        stars.push(<Icon name={name} size={20} style={{ color: colour }} key={i} />);
    }

    return (
        <View style={styles.container}>
            { stars}
            <Text style={styles.text}>({props.reviews} Comments)</Text>
        </View>
    );

}

export { StarRating };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        color: '#FF8C00'
    },
    text: {
        fontSize: 12,
        marginLeft: 5,
        color: '#444',
    }
});