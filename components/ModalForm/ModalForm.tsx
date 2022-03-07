import { StyleSheet } from 'react-native';
import React from 'react';
import { Input, View } from '../Themed';
import TwoButtonGroup from '../TwoButtonGroup';
import SaveTryButtons from '../SaveTryButtons';
import PercentIcon from '../UI/TextAsIcon';


const ModalForm = () => {
    return (
        <View style={styles.container}>

            <View style={styles.topRow}>
                <View style={styles.percentWrapper}>
                    <Input
                        style={styles.input}
                        inputContainerStyle={styles.inputContainer}
                        keyboardType="numeric"
                        placeholder="1.0"
                    />
                </View>
                <View style={styles.percentIconContainer}>
                    <PercentIcon />
                </View>
            </View>

            <TwoButtonGroup />

            <View style={styles.titleContainer}>
                <Input
                    placeholder='Title'
                    style={[styles.input, { fontSize: 24 }]}
                    inputContainerStyle={styles.inputContainer}
                    keyboardType='ascii-capable'
                    maxLength={30}
                />
            </View>

            <SaveTryButtons />

        </View>
    )
}

export default ModalForm

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        backgroundColor: "transparent"
    },
    topRow: {
        height: 52,
        marginBottom: 20,
        flexDirection: "row",
        marginHorizontal: 10,
        backgroundColor: "transparent"
    },
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
    titleContainer: {
        marginHorizontal: 10,
        height: 52,
        marginBottom: 25,
        backgroundColor: "transparent"
    }

})