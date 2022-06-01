import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';

import color from '../config/color';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: color.primary,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: color.secondary
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 70
    }
});

const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text>Sell what we dont need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
};

export default WelcomeScreen;
