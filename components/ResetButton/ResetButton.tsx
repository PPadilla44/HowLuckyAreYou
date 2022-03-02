import { Alert, Button, StyleSheet } from 'react-native';
import { View } from "../../components/Themed"
import React, { FC } from 'react'

interface Props {
    didHit: boolean;
    resetAll: () => void;
};


const ResetButton: FC<Props> = ({ didHit, resetAll }) => {

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