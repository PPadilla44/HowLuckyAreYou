import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { RootStackScreenProps } from '../types';
import { View, Text } from '../components/Themed';
import Radio from '../components/Radio';

const Settings: FC<RootStackScreenProps<"Settings">> = ({ }) => {


    return (
        <View style={styles.container}>

            <Text style={styles.appText}>Appearance</Text>
            <Radio />


        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    appText: {
        textAlign: "center",
        fontSize: 24,
        marginBottom: 10,
        fontWeight:"bold"
    }
})