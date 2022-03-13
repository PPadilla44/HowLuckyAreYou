import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Input, View } from '../../Themed'
import { TextAsIcon } from '../../UI'


export interface Props {
    oddsString: string;
    changeText: (data: {}) => void
}
const PercentInput: FC<Props> = ({ changeText, oddsString }) => {

    return (
        <>
            <View style={styles.percentWrapper}>
                <Input
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    keyboardType="numeric"
                    placeholder="1.0"
                    maxLength={10}
                    value={oddsString}
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