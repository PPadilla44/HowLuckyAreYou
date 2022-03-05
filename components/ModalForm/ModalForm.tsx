import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Input } from '../Themed';
import TwoButtonGroup from '../TwoButtonGroup';
import SaveTryButtons from '../SaveTryButtons';
import Colors from '../../constants/Colors';
import PercentIcon from '../UI/TextAsIcon';


const ModalForm = () => {
    return (
        <View style={{borderBottomWidth: 1, borderColor: "black", paddingBottom: 15}}>

            <Input
                style={styles.input}
                errorStyle={{ textAlign: "center", fontFamily: "Futura" }}
                // errorMessage={"Unsaved Changed"}
                inputContainerStyle={styles.inputContainer}
                keyboardAppearance="light"
                keyboardType="numeric"
                rightIcon={<PercentIcon />}
                rightIconContainerStyle={{ height: 52, marginLeft: 10 }}
                placeholder="1.0"
            />

            <TwoButtonGroup />

            <Input
                placeholder='Title'
                style={[styles.input, { fontSize: 24 }]}
                errorStyle={{ textAlign: "center", fontFamily: "Futura" }}
                // errorMessage={"Unsaved Changed"}
                inputContainerStyle={styles.inputContainer}
                keyboardAppearance="light"
                keyboardType='ascii-capable'
                maxLength={30}
            />

            <SaveTryButtons />

        </View>
    )
}

export default ModalForm

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        fontSize: 48,
        fontWeight: "bold",
        fontFamily: "Futura",
        textAlign: "center",
        height: 52,
    },
    inputContainer: {
        borderBottomWidth: 0,
    },
    percent: {
        fontSize: 48,
        fontWeight: "bold"
    }
})