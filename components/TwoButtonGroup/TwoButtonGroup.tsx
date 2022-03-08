import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ButtonGroup } from '../Themed'

const TwoButtonGroup = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateIndex = (newIndex: number) => {
        setSelectedIndex(newIndex)
    }
    const button1 = "Percentage";
    const button2 = "Fraction";

    const buttons = [button1, button2];

    return (
        <ButtonGroup
            buttons={buttons}
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            containerStyle={styles.container}
            buttonStyle={styles.button} 
            textStyle={styles.text}
            selectedButtonStyle={styles.selectedButton}
            selectedTextStyle={styles.selectedText}
            innerBorderStyle={{color: "transparent"}}
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