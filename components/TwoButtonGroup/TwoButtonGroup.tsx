import { Alert, StyleSheet } from 'react-native'
import React, { FC, useEffect } from 'react'
import { ButtonGroup } from '../Themed'
import { useClicker } from '../contexts/useClicker';
import { ClickerState } from '../../store/clicker';

interface Props {
    buttons: any[];
    clearForm: () => {
        oddsString: string,
        title: string,
        numerator: string,
        denominator: string,
        multiplier: string,
        isValid: boolean,
    };
}

const TwoButtonGroup: FC<Props> = ({ buttons, clearForm }) => {

    const { state, dispatch } = useClicker();


    useEffect(() => {
        if(state.fractionPref && state.fraction.denominator.toString().length > 4) {
            dispatch!({ type: "SET_FRACTIONPREF", payload: 0 })
        }
        
    }, [])

    const switchAndReset = (index: number) => {
        const clearedForm = clearForm();
        const newForm = {
            ...clearedForm,
            fraction: {
                denominator: parseInt(clearedForm.denominator),
                numerator: parseInt(clearedForm.numerator)
            }
        }
        dispatch!({ type: "SET_STATE", payload: newForm })
        dispatch!({ type: "SET_FRACTIONPREF", payload: index })
    }

    const handleSwitch = (index: number) => {
        if (index === 0 && isNaN(parseInt(state.multiplier))) {

            Alert.alert(
                "This Will Reset Your Current Odds",
                "Would you like to continue?",
                [
                    { text: "No", style: "cancel" },
                    { text: "Yes", onPress: () => switchAndReset(index)}
                ]
            )
            return;
        }

        if (index === 1 && state.fraction.denominator.toString().length > 4) {
            Alert.alert(
                "This Will Reset Your Current Odds",
                "Would you like to continue?",
                [
                    { text: "No", style: "cancel" },
                    { text: "Yes", onPress: () => switchAndReset(index) }
                ]
            )
            return;
        }

        dispatch!({ type: "SET_FRACTIONPREF", payload: index })
    }

    return (
        <ButtonGroup
            buttons={buttons}
            onPress={(newIndex: number) => handleSwitch(newIndex)}
            selectedIndex={state.fractionPref}
            containerStyle={styles.container}
            buttonStyle={styles.button}
            textStyle={styles.text}
            selectedButtonStyle={styles.selectedButton}
            selectedTextStyle={styles.selectedText}
            innerBorderStyle={{ color: "transparent" }}
        />
    )
}

export default TwoButtonGroup

const styles = StyleSheet.create({
    container: {
        padding: 2,
        height: 32,
        borderRadius: 9,
        marginBottom: 20,
        marginTop: 0
    },
    button: {
        borderRadius: 7,
        opacity: .5
    },
    text: {
        fontFamily: "Futura",
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
    },
    selectedButton: {
        backgroundColor: "white",
        opacity: 1
    },
    selectedText: {
        color: "black"
    }
})