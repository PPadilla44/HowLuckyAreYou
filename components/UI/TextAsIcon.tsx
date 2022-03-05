import { StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '../Themed'


const TextAsIcon = () => {
    return (
        <Text style={styles.icon} >
            {`%`}
        </Text>
    )
}

export default TextAsIcon

const styles = StyleSheet.create({
    icon: {
        fontSize: 48,
        fontWeight: "bold",
    }
})