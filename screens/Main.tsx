import { StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed";
import React from 'react';
import SubContainer from '../components/SubContainer';
import ResetButton from '../components/ResetButton';
import MainButton from '../components/MainButton';
import { useClicker } from '../components/contexts/useClicker';
import { RootTabScreenProps } from '../types';

const Main = ({  }: RootTabScreenProps<"Main">) => {

    const { state, dispatch } = useClicker();
    const { count, odds } = state;

    return (
        <View style={styles.container}>

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

            <ResetButton />

        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    clickAmnt: {
        fontWeight: "bold",
        fontSize: 64,
        fontFamily: "Futura"
    },
    probText: {
        fontWeight: "bold",
        fontSize: 48,
        textAlign: "center",
        fontFamily: "Futura"
    }
})