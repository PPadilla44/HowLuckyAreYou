import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from "../Themed";
import Colors from '../../constants/Colors';


interface Props {
    showTry: boolean
    handleTry: () => void;
    handleSave: () => void;
}


const SaveTryButtons: FC<Props> = ({ showTry, handleSave, handleTry }) => {

    return (
        <View style={styles.container}>

            <TouchableOpacity testID='saveBtn'
                disabled={!showTry}
                lightColor={showTry ? "" : Colors.dark.input}
                darkColor={showTry ? "" : Colors.dark.input}
                containerStyle={[styles.saveBtn, { opacity: showTry ? 1 : .5 } ]}
                onPress={handleSave}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
                testID='tryBtn'
                lightColor={showTry ? Colors.light.input : "transparent"}
                darkColor={showTry ? Colors.dark.input : "transparent"}
                containerStyle={styles.tryBtn}
                onPress={handleTry}
                disabled={!showTry}
            >
                <Text
                    lightColor={showTry ? "" : Colors.dark.input}
                    darkColor={showTry ? "" : Colors.dark.text}
                    style={[styles.tryText, { opacity: showTry ? 1 : .5 }]} >
                    Try
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default SaveTryButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        backgroundColor: "transparent",
    },
    tryBtn: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    tryText: {
        fontSize: 36,
        fontWeight: "bold"
    },
    saveBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    saveText: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold"
    }
})