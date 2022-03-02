import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import React, { FC } from 'react'

interface Props {
    textStyle: StyleProp<TextStyle>
    title: string,
    text: string
}

const SubContainer: FC<Props> = ({ textStyle, title, text }) => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={textStyle}>{text}</Text>
        </View>
    )
}

export default SubContainer

const styles = StyleSheet.create({
    subContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 70
    },
    title: {
        color: "#FBF8F1",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        fontFamily: "LexendDeca_700Bold"
        
    },
})