import { StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '../Themed'


const TextAsIcon = ({text}: {text: string}) => {
    return (
        <Text style={styles.icon} >
            {text}
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