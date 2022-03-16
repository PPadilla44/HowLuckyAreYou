import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Input, View } from '../../Themed'
import { TextAsIcon } from '../../UI'


export interface Props {
    oddsString: string;
    multiplier: string;
    changeText: (data: {}) => void;
}
const PercentInput: FC<Props> = ({ changeText, oddsString, multiplier }) => {
    console.log(multiplier);
    

    return (
        <>
            <View style={styles.percentWrapper}>
                <Input
                    testID='percentInput'
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    keyboardType="numeric"
                    placeholder={multiplier === "M" || multiplier === "B" ? "Too Long" : "1.0"}
                    maxLength={10}
                    value={multiplier === "M" || multiplier === "B" ? "" : oddsString}
                    onChangeText={oddsString => changeText({ oddsString })}
                />
            </View>
            <View style={styles.percentIconContainer}>
                <TextAsIcon style={{fontSize: 48, fontWeight: "bold"}} text={'%'} />
            </View>
        </>
    )
}

export default PercentInput

const styles = StyleSheet.create({
    percentWrapper: {
        flex: 1,
        backgroundColor: "transparent"
    },
    input: {
        borderRadius: 15,
        fontSize: 48,
        fontWeight: "bold",
        fontFamily: "Futura",
        textAlign: "center",
        height: 52,
    },
    percentIconContainer: {
        height: 52,
        marginLeft: 10,
        backgroundColor: "transparent"
    },
    inputContainer: {
        borderBottomWidth: 0,
    },
})