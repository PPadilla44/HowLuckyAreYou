import { Alert, Modal, Pressable, StyleSheet } from 'react-native'
import React, { FC, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Text, View } from "../../../Themed"
import Colors from '../../../../constants/Colors';

interface Props {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    mult: string;
    handleChanges: (data: {}) => void;
}

const MultiplierModal: FC<Props> = ({ modalVisible, setModalVisible, mult, handleChanges }) => {

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>

            <View darkColor={Colors.light.input} style={styles.centeredView}>
                <View darkColor={Colors.light.input} style={styles.modalView}>
                    <Text style={{ color: "black", textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Select A Multiplier</Text>
                    <Picker
                        selectedValue={mult}
                        onValueChange={(multiplier, index) => handleChanges({multiplier})}
                        style={{
                            width: 300,
                            justifyContent: "center"
                        }}
                        itemStyle={{
                            fontFamily: "Futura",
                            fontWeight: "bold"
                        }}
                    >
                        <Picker.Item label="x 1" value="1" />
                        <Picker.Item label="x 10" value="10" />
                        <Picker.Item label="x M" value="M" />
                        <Picker.Item label="x B" value="B" />
                    </Picker>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Confirm Multiplier</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>

    );

}

export default MultiplierModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent"
    },
    modalView: {
        // backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },

    buttonClose: {
        backgroundColor: Colors.shared.text,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

});