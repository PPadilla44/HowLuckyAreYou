import { Platform, StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed"
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Dropdown = () => {
    return (
        <View style={styles.container}>
            <Text>YEZ</Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            <Text>SOME FORM STUDD HERE</Text>
        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
})