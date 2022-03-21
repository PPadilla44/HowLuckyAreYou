import { StyleSheet } from 'react-native';
import React, { FC, useState } from 'react';
import { TextAsIcon } from '../../UI';
import { TouchableOpacity, View, Text, Input } from '../../Themed';
import Colors from '../../../constants/Colors';
import MultiplierModal from './MultiplierModal';


export interface Props {
    denominator: string;
    numerator: string;
    handleChanges: (data: {}) => void;
    multiplier: string;
}

const FractionInput: FC<Props> = ({ denominator, numerator, handleChanges, multiplier }) => {


    const [modalVisible, setModalVisible] = useState(false);


    return (
        <>

            <View style={{ flex: 2, backgroundColor: "transparent" }}>
                <Input
                    testID='numeratorInput'
                    keyboardType="number-pad"
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    placeholder='1'
                    maxLength={2}
                    value={numerator}
                    onChangeText={numerator => handleChanges({ numerator })}
                />
            </View>
            <View style={{ marginHorizontal: 10, backgroundColor: "transparent", height: 52 }}>
                <TextAsIcon style={{ fontSize: 48, fontWeight: "bold" }} text={'/'} />
            </View>
            <View style={{ flex: 3, backgroundColor: "transparent" }}>
                <Input
                    testID='denominatorInput'
                    keyboardType="number-pad"
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    placeholder='10'
                    maxLength={4}
                    value={denominator}
                    onChangeText={denominator => handleChanges({ denominator })}
                />
            </View>
            <TouchableOpacity darkColor={Colors.light.input} lightColor={Colors.dark.modal}
                onPress={() => setModalVisible(true)}
                containerStyle={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    marginHorizontal: 10,
                    borderRadius: 5,
                    width: 52,
                }}
            >
                <Text darkColor={Colors.dark.modal} lightColor={Colors.light.input} style={{ fontSize: 18, fontWeight: "bold" }}>x {multiplier}</Text>
            </TouchableOpacity>

            <MultiplierModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                mult={multiplier}
                handleChanges={handleChanges}
            />

        </>
    )
}

export default FractionInput

const styles = StyleSheet.create({
    input: {
        borderRadius: 15,
        fontSize: 48,
        fontWeight: "bold",
        fontFamily: "Futura",
        textAlign: "center",
        height: 52,
        overflow: "visible"
    },
    inputContainer: {
        borderBottomWidth: 0,
        overflow: "visible"
    },


})