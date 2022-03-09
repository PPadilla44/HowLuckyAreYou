import { StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed";
import React, { useState } from 'react';
import SubContainer from '../components/SubContainer';
import ResetButton from '../components/ResetButton';
import MainButton from '../components/MainButton';
import { useClicker } from '../components/contexts/useClicker';
import { RootTabScreenProps } from '../types';

const Main = ({ }: RootTabScreenProps<"Main">) => {

    const { state, dispatch } = useClicker();
    const { count, oddsString, title, fraction } = state;
    const { numerator, denominator } = fraction;

    const [fractionPref, setFractionPref] = useState(false);

    return (
        <View style={styles.container}>

            <SubContainer
                text={`${count}`}
                textStyle={styles.clickAmnt}
                title={`Times Clicked`}
            />

            <MainButton />

            <SubContainer
                text={
                    fractionPref ?
                        `${numerator} / ${denominator}`
                        :
                        `${oddsString}%`
                }
                textStyle={styles.probText}
                title={title}
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