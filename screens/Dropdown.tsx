import { Platform, StyleSheet } from 'react-native';
import { View, ScrollView } from "../components/Themed"
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { RootTabScreenProps } from '../types';
import ModalForm from '../components/ModalForm';
import { SettingsIcon } from '../components/UI';
import OddsList from '../components/OddsList';
import { useOddsItems } from '../components/contexts/useOddsItems';
import { fetchOddsList } from '../store/utils/thunkerFunctions';



const Dropdown = (props: RootTabScreenProps<"Modal">) => {

    const { state: oState, dispatch: oDispatch } = useOddsItems();


    const fetch = async () => {
        await fetchOddsList(oDispatch)
    }

    useEffect(() => {
        fetch();
    }, []);


    return (
        <View style={styles.container} darkColor="#252525">
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

            <ScrollView darkColor="#252525" >

                <ModalForm navigation={props.navigation} />

                <OddsList data={oState} />

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