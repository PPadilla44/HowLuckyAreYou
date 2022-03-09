import { StyleSheet } from 'react-native'
import React from 'react'
import { TextAsIcon } from '../../UI'
import { TouchableOpacity, View, Text, Input } from '../../Themed'
import Colors from '../../../constants/Colors'

const FractionInput = () => {

    
    return (
        <>

            <View style={{ flex: 1, backgroundColor: "transparent" }}>
                <Input
                    keyboardType="number-pad"
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    placeholder='1'
                    maxLength={2}
                />
            </View>
            <View style={{ marginHorizontal: 10, backgroundColor: "transparent", height: 52 }}>
                <TextAsIcon text={'/'} />
            </View>
            <View style={{ flex: 2, backgroundColor: "transparent" }}>
                <Input
                    keyboardType="number-pad"
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    placeholder='10'
                    maxLength={3}
                />
            </View>
            <TouchableOpacity darkColor={Colors.light.input} lightColor={Colors.dark.modal} containerStyle={{
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                height: 35,
                marginHorizontal: 10,
                borderRadius: 5,
                width: 52,

            }}
            >
                <Text darkColor={Colors.dark.modal} lightColor={Colors.light.input} style={{ fontSize: 18, fontWeight: "bold" }}>BIL</Text>
            </TouchableOpacity>
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
    },
    inputContainer: {
        borderBottomWidth: 0,
    },


})