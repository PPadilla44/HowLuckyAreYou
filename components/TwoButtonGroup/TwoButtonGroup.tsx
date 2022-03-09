import { StyleSheet } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { ButtonGroup } from '../Themed'

interface Props {
    buttons: any[];
    selectedIndex: number;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
}

const TwoButtonGroup: FC<Props> = ({ buttons, selectedIndex, setSelectedIndex }) => {



    return (
        <ButtonGroup
            buttons={buttons}
            onPress={(newIndex: number) => setSelectedIndex(newIndex)}
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