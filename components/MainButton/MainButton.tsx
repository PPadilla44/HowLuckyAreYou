import { StyleSheet } from 'react-native'
import { Text, View, TouchableOpacity } from "../../components/Themed";
import React from 'react'
import { ClickerActionKind } from '../../store/clicker';
import { useClicker } from '../contexts/useClicker';

const MainButton = () => {

    const {state, dispatch} = useClicker();
    const { didHit, results } = state;

    const handlePress = () => dispatch!({ type: ClickerActionKind.INCREASE });

    if (didHit) {
        return (
            <View style={[styles.btnDone, { backgroundColor: results.BtnColor }]} >
                <Text style={styles.btnDoneText}>{results.text}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={handlePress} activeOpacity={0.7}>
            <Text style={styles.btnText}>Test Your Luck</Text>
        </TouchableOpacity>
    )
}

export default MainButton

const styles = StyleSheet.create({
    btn: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    btnDone: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    btnText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        fontFamily: "LexendDeca_700Bold",
        textAlign: "center"
    },
    btnDoneText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        fontFamily: "LexendDeca_700Bold",
        textAlign: "center"

    },

})