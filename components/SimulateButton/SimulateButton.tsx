import { Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'
import { Text } from '../Themed'
import { useClicker } from '../contexts/useClicker'

const SimulateButton = () => {

    const { state, dispatch } = useClicker();
    const [pressed, setPressed] = useState(false);

    const simulate = () => {
        dispatch!({ type: "SET_LOADING" });
        setPressed(true);
    };

    useEffect(() => {
        if (pressed) {
            dispatch!({ type: "SIMULATE" });
            setPressed(false);
        }
    }, [pressed])

    return (
        <Pressable onPress={simulate}
            style={({ pressed }) => ({
                opacity: pressed ? 0.3 : 1
            })}
            disabled={state.didHit}
        >
            {
                state.loading ?
                    <Text style={[styles.simText, { color: "red" }]} >Simulating</Text>
                    :
                    <Text style={styles.simText} >Simulate</Text>
            }
        </Pressable>
    )
}

export default SimulateButton

const styles = StyleSheet.create({
    simText: {
        color: Colors.dark.input,
        fontSize: 18,
        fontWeight: "bold"
    }
})