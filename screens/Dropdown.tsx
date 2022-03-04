import { Platform, StyleSheet } from 'react-native';
import { Text, View, Input } from "../components/Themed"
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Dropdown = () => {
    return (
        <View style={styles.container} darkColor="#252525">
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            <View style={styles.inputContainer}>
                <Input style={styles.input} keyboardType="numeric"/>
                <Text style={{ fontSize: 48, fontWeight: "bold" }} >%</Text>
            </View>
        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        paddingHorizontal: 24,
        flexDirection: "row",
        backgroundColor:"red",
        
    },
    input: {
        borderRadius: 15,
        fontSize: 48,
        fontWeight: "bold",
        fontFamily: "Futura"
    }
})