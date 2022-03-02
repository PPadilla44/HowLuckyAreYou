import { StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed";
import React, { useReducer, useState } from 'react';
import SubContainer from '../components/SubContainer';
import { LexendDeca_700Bold, useFonts } from '@expo-google-fonts/lexend-deca';
import Dropdown from '../components/Dropdown';
import ResetButton from '../components/ResetButton';
import MainButton from '../components/MainButton';
import { initialMainState, mainReducer } from '../contexts/Main';

const Main = () => {

    let [fontsLoaded] = useFonts({
        LexendDeca_700Bold,
    });

    const [state, dispatch] = useReducer(mainReducer, initialMainState)
    console.log(state);
    

    const [clickAmt, setClickAmt] = useState(0);
    const [didHit, setDidHit] = useState(false);
    const [results, setResults] = useState({ BtnColor: "", text: "" });

    if (!fontsLoaded) {
        return <View><Text>LOADING..</Text></View>
    }

    const resetAll = () => {
        setClickAmt(0);
        setDidHit(false);
        setResults({ BtnColor: "", text: "" });
    }

    return (
        <View style={styles.container}>

            <Dropdown />


            <SubContainer
                text={`${state.count}`}
                textStyle={styles.clickAmnt}
                title={`Times Clicked`}
            />

            <MainButton />

            <SubContainer
                text={`${state.odds * 100}%`}
                textStyle={styles.probText}
                title={`Probability`}
            />

            <ResetButton didHit={didHit} resetAll={resetAll} />

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