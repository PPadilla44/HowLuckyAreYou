import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "../Themed";
import Colors from '../../constants/Colors';

const SaveTryButtons = () => {


    const [showTry, setShowTry] = useState(false);

    return (
        <View style={styles.container}>

            <TouchableOpacity containerStyle={styles.saveBtn}>
                <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
                lightColor={showTry ? Colors.light.input : "transparent" }
                darkColor={showTry ? Colors.dark.input : "transparent" }
                containerStyle={styles.tryBtn}
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