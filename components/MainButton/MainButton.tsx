import { StyleSheet } from 'react-native'
import { Text, View, TouchableOpacity } from "../../components/Themed";
import React from 'react'
import { BtnColorObj } from '../../store/clicker';
import { useClicker } from '../contexts/useClicker';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

const MainButton = () => {

    const {state, dispatch} = useClicker();
    const { didHit, results } = state;

    const handlePress = () => dispatch!({ type: 'INCREASE' });

    // const theme = useColorScheme();
    const theme = "light";

    if (didHit) {
        return (
            <View style={[styles.btnDone, { backgroundColor: BtnColorObj[results.BtnColor], shadowColor: Colors[theme].text }]} >
                <Text style={styles.btnText}>{results.text}</Text>
            </View>
        )
    }

    return (
        <TouchableOpacity containerStyle={[styles.btn, {shadowColor: Colors[theme].text} ]} onPress={handlePress} activeOpacity={0.7}>
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
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    btnText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Futura",
        textAlign: "center"
    }
})