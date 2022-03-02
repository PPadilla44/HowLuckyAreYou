import { Alert, Button, StyleSheet } from 'react-native';
import { View } from "../../components/Themed"
import React from 'react'
import { useClicker } from '../contexts/useClicker';
import { ClickerActionKind } from '../../store/clicker';


const ResetButton = () => {

    const { state, dispatch } = useClicker();

    const { didHit } = state;

    const resetAll = () => dispatch!({ type: ClickerActionKind.RESET })

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Reset",
            "Are you sure you would like to reset?",
            [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Yes", onPress: resetAll }
            ]
        );

    return (
        <View style={[ styles.btn, {opacity: didHit ? 1 : 0.5 } ]}>
            <Button title='Reset' onPress={createTwoButtonAlert} color={didHit ? "red" : "gray"} />
        </View>
    )
}

export default ResetButton

const styles = StyleSheet.create({
    btn: { position: "absolute", left: 0 }
})