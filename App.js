import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import ViewImageScreen from "./App/Screens/ViewImageScreen";

export default function App() {
    return (
        <WelcomeScreen/>
        // <ViewImageScreen/>
    );
}

const styles = StyleSheet.create({
    container: {},
});
