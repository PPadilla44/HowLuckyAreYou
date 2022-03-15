import { StyleSheet } from 'react-native';
import { ButtonGroup, View } from "../components/Themed";
import React, { FC, useState } from 'react';
import SubContainer from '../components/SubContainer';
import ResetButton from '../components/ResetButton';
import MainButton from '../components/MainButton';
import { useClicker } from '../components/contexts/useClicker';
import { RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';


const Main: FC<RootTabScreenProps<"Main">> = ({ }) => {

    const { state, dispatch } = useClicker();
    const { count, oddsString, title, fraction, multiplier } = state;
    const { numerator, denominator } = fraction;

    const [fractionPref, setFractionPref] = useState(0);

    return (
        <View testID='Main' style={styles.container}>

            <SubContainer
                text={`${count}`}
                textStyle={styles.clickAmnt}
                title={`Times Clicked`}
            />

            <MainButton />

            <View style={{ alignItems: "center", justifyContent: "center" }}>

                <SubContainer
                    text={
                        fractionPref ?
                            `${numerator} / ${denominator} ${multiplier}`
                            :
                            `${oddsString}%`
                    }
                    textStyle={styles.probText}
                    title={title}
                />

                <ButtonGroup
                    buttons={["Percent", "Fraction"]}
                    onPress={(newIndex: number) => setFractionPref(newIndex)}
                    selectedIndex={fractionPref}
                    containerStyle={styles.btnContainer}
                    buttonStyle={styles.btn}
                    textStyle={styles.btnText}
                    selectedButtonStyle={styles.selectedBtn}
                    selectedTextStyle={styles.btnSelectedText}
                />
            </View>

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
    },
    btnContainer: {
        height: 20,
        marginTop: 0,
        borderColor: "transparent",
        backgroundColor: "transparent",
        width: 250,
    },
    btn: {
        opacity: .5
    },
    btnText: {
        fontFamily: "Futura",
        fontSize: 15,
        letterSpacing: 1.2,
        fontWeight: "bold",
        color: Colors.dark.input
    },
    selectedBtn: {
        backgroundColor: "transparent",
        opacity: 1
    },
    btnSelectedText: {
        color: Colors.shared.icon
    }
})