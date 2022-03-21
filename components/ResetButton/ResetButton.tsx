import { Alert, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { View } from "../../components/Themed";
import React from 'react';
import { useClicker } from '../contexts/useClicker';

const ResetButton = () => {

    const { state, dispatch } = useClicker();

    const { didHit } = state;

    const resetAll = () => dispatch!({ type: 'RESET' })

    const createTwoButtonAlert = () => (

        Alert.alert(
            "Reset",
            "Are you sure you would like to reset?",
            [
                {
                    text: "No",
                    style: "cancel"
                },
                { text: "Yes", style: "destructive", onPress: resetAll }
            ]
        ));

    return (
        <View testID='resetWrapper' style={[styles.btn, { opacity: didHit ? 1 : 0.5 }]}>
            <Button
                testID='resetBtn'
                title='Reset'
                onPress={createTwoButtonAlert}
                titleStyle={{ color: didHit ? "red" : "gray", fontFamily: "Futura" }}
                buttonStyle={{ backgroundColor: undefined }}
                disabled={state.loading}
                disabledStyle={{ backgroundColor: "transparent" }}
                disabledTitleStyle={{ opacity: .3 }}
                activeOpacity={.6}

            />
        </View>
    )
}

export default ResetButton

const styles = StyleSheet.create({
    btn: {
        position: "absolute",
        left: 10,
        bottom: 10,
    }
})