import { Platform, StyleSheet } from 'react-native';
import { View, ScrollView } from "../components/Themed"
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { RootTabScreenProps } from '../types';
import ModalForm from '../components/ModalForm';
import { SettingsIcon } from '../components/UI';
import OddsList from '../components/OddsList';


const Dropdown = ({ }: RootTabScreenProps<"Modal">) => {

    return (
        <View style={styles.container} darkColor="#252525">
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

            <ScrollView darkColor="#252525" >

                <ModalForm />

                <OddsList />

            </ScrollView>

            <SettingsIcon />

        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})