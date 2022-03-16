import { Platform, StyleSheet } from 'react-native';
import { View, ScrollView } from "../components/Themed"
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { OddsItemInterface, RootTabScreenProps } from '../types';
import ModalForm from '../components/ModalForm';
import { SettingsIcon } from '../components/UI';
import OddsList from '../components/OddsList';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useOddsItems } from '../components/contexts/useOddsItems';


const Dropdown = (props: RootTabScreenProps<"Modal">) => {

    const { state: oState, dispatch: oDispatch } = useOddsItems();

    const getAllKeys = async () => {
        let keys: string[] = [];
        let values: [string, string | null][] = [];
        try {
            keys = await AsyncStorage.getAllKeys()
            values = await AsyncStorage.multiGet(keys)
        } catch (e) {
            // read key error
        }

        const temp = values.map((v) => {
            let tempObj = JSON.parse(v[1] as string)
            let tempData: OddsItemInterface = {
                id: tempObj.id,
                displayOdds: tempObj.oddsString,
                multiplier: tempObj.multiplier,
                title: tempObj.title,
                fraction: {
                    denominator: tempObj.denominator,
                    numerator: tempObj.numerator
                },
                oddsString: tempObj.oddsString
            }
            return tempData
        })
        // DISPATCH FOR ODDS ITEM
    }


    useEffect(() => {
        
        getAllKeys();
        console.log("RUNNING");
        
        return () => {}
    }, []);

    // const data: OddsItemInterface[] = [
    //     { id: "1", title: "Lottery", displayOdds: "1/42 BIL", multiplier: "B" },
    //     { id: "2", title: "Hair Loss", displayOdds: "2/3", multiplier: "1" },
    //     { id: "3", title: "Random", displayOdds: "1.02 %", multiplier: "1" },
    //     { id: "4", title: "My Odds", displayOdds: "1/4", multiplier: "1" },
    // ]

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