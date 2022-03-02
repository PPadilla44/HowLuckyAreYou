import { StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed";
import React, { useState } from 'react';
import SubContainer from '../components/SubContainer';
import { LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import Dropdown from '../components/Dropdown';
import ResetButton from '../components/ResetButton';
import MainButton from '../components/MainButton';
import { useClicker } from '../components/contexts/useClicker';

const Main = () => {
    
    let [fontsLoaded] = useFonts({
        LexendDeca_700Bold,
    });

    const { state, dispatch } = useClicker();
    const { count, odds } = state;

    if (!fontsLoaded) {
        return <View><Text>LOADING..</Text></View>
    }

    return (
        <View style={styles.container}>

            <Dropdown />

            <SubContainer
                text={`${count}`}
                textStyle={styles.clickAmnt}
                title={`Times Clicked`}
            />

            <MainButton />

            <SubContainer
                text={`${odds * 100}%`}
                textStyle={styles.probText}
                title={`Probability`}
            />

            <ResetButton  />

        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    clickAmnt: {
        fontWeight: "bold",
        fontSize: 64,
        fontFamily: "LexendDeca_700Bold"
    },
    probText: {
        fontWeight: "bold",
        fontSize: 48,
        textAlign: "center",
        fontFamily: "LexendDeca_700Bold"
    }
})