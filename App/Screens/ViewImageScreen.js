import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import color from "../config/color";

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: "100%"
    },
    container: {
        backgroundColor: color.black,
        flex: 1
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: color.primary,
        position: 'absolute',
        top: 40,
        left: 20
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: color.secondary,
        position: 'absolute',
        top: 40,
        right: 20
    }
});

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode={"contain"} style={styles.image} source={require('../assets/chair.jpg')}/>
        </View>
    );
};

export default ViewImageScreen;
