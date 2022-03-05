import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "../Themed";
import Colors from '../../constants/Colors';

const SaveTryButtons = () => {


    const [showTry, setShowTry] = useState(false);

    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.saveText }>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity lightColor={Colors.light.input} style={[styles.tryBtn, { backgroundColor: showTry ? Colors.light.input : "transparent" } ]}>
                <Text style={[styles.tryText, showTry ? {} : { color: Colors.dark.input, opacity: .5 } ]} >Try</Text>
            </TouchableOpacity>


        </View>
    )
}

export default SaveTryButtons

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 52,
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
    saveBtn:{
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