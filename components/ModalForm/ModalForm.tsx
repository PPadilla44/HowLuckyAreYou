import { StyleSheet } from 'react-native';
import React from 'react';
import { Input, View } from '../Themed';
import TwoButtonGroup from '../TwoButtonGroup';
import SaveTryButtons from '../SaveTryButtons';
import PercentIcon from '../UI/TextAsIcon';


const ModalForm = () => {
    return (
        <View style={{ paddingBottom: 15, backgroundColor: "transparent" }}>


            <View style={{
                height: 52,
                marginBottom: 20,
                flexDirection: "row",
                marginHorizontal: 10,
                backgroundColor: "transparent"
            }}>
                <View style={{flex: 1,
                backgroundColor: "transparent"
                }}>

                    <Input
                        style={styles.input}
                        inputContainerStyle={styles.inputContainer}
                        keyboardType="numeric"
                        placeholder="1.0"
                    />
                </View>
                <View style={{ height: 52, marginLeft: 10, backgroundColor: "transparent"}}>
                    <PercentIcon />
                </View>
            </View>

            <TwoButtonGroup />

            <View style={[{ marginHorizontal: 10, height: 52, marginBottom: 25, backgroundColor: "transparent" }]}>
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
        fontWeight: "bold",
        flexGrow: 1
    },

})