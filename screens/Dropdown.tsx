import { Platform, StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed"
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Dropdown = () => {
    return (
        <View style={styles.container} darkColor="#252525">
            {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
            <Text>YEZ</Text>
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