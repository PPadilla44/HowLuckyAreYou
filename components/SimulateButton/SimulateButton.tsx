import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { Text } from '../Themed'
import { useClicker } from '../contexts/useClicker'

const SimulateButton = () => {

    const { state, dispatch } = useClicker();

    const simulate = () => {
        dispatch!({ type: 'SIMULATE' })
    }

    return (
        <Pressable onPress={simulate}
            style={({ pressed }) => ({
                opacity: pressed ? 0.3 : 1
            })}
            disabled={state.didHit}
            >
            <Text style={styles.simText} >Simulate</Text>
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