import { Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import { Text } from '../Themed'
import { useClicker } from '../contexts/useClicker'
import { Button } from 'react-native-elements'

const SimulateButton = () => {

    const { state, dispatch } = useClicker();
    const { didHit, loading } = state;
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

    const simulate = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
            dispatch!({ type: "SET_LOADING", payload: false })
            return;
        }

        if (!didHit) {
            dispatch!({ type: "SET_LOADING", payload: true })
            const newInterval = setInterval(() => {
                dispatch!({ type: "INCREASE" });
            }, 10);

            setIntervalId(newInterval);
        }
    };

    useEffect(() => {
        if (didHit) {
            dispatch!({ type: "SET_LOADING", payload: false });
            clearInterval(intervalId as NodeJS.Timer);
            setIntervalId(null);
        }
    }, [didHit])



    return (
        <Button
        testID='simBtn'
        title={ loading ? "Cancel" : "Simulate" }
        onPress={simulate}
        activeOpacity={.6}
        titleStyle={[{ color: loading ? "red" : Colors.dark.input }, styles.simText]}
        buttonStyle={{ backgroundColor: undefined }}
        disabled={didHit}
        disabledStyle={{backgroundColor:"transparent"}}
        disabledTitleStyle={{ opacity: .3 }}
    />
        // <Pressable onPress={simulate}
        //     style={({ pressed }) => ({
        //         opacity: pressed ? 0.3 : 1
        //     })}
        //     disabled={didHit}
        // >
        //     {
        //         loading ?
        //             <Text style={[styles.simText, { color: "red" }]} >Cancel</Text>
        //             :
        //             <Text style={styles.simText} >Simulate</Text>
        //     }
        // </Pressable>
    )
}

export default SimulateButton

const styles = StyleSheet.create({
    simText: {
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Futura"
    }
})