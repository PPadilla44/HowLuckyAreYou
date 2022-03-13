import { Platform, StyleSheet } from 'react-native';
import { View, ScrollView } from "../components/Themed"
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { OddsItemInterface, RootTabScreenProps } from '../types';
import ModalForm from '../components/ModalForm';
import { SettingsIcon } from '../components/UI';
import OddsList from '../components/OddsList';


const Dropdown = (props: RootTabScreenProps<"Modal">) => {

    const data: OddsItemInterface[] = [
        { id: "1", name: "Lottery", odds: "1/42 BIL" },
        { id: "2", name: "Hair Loss", odds: "2/3" },
        { id: "3", name: "Random", odds: "1.02%" },
        { id: "4", name: "My Odds", odds: "1/4" }
    ]

    return (
        <View style={styles.container} darkColor="#252525">
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

            <ScrollView darkColor="#252525" >

                <ModalForm navigation={props.navigation} />

                <OddsList data={data} />

            </ScrollView>

            <SettingsIcon callBack={() => alert("Settings")} />

        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})