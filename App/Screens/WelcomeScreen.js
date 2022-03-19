import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
});

const WelcomeScreen = () => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}>
        </ImageBackground>

    );
};

export default WelcomeScreen;
