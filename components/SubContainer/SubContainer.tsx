import { StyleProp, StyleSheet, TextStyle,  } from 'react-native'
import { View, Text } from "../Themed"
import React, { FC } from 'react'

interface Props {
    textStyle: StyleProp<TextStyle>
    title: string,
    text: string
}

const SubContainer: FC<Props> = ({ textStyle, title, text }) => {
    return (
        <View style={styles.subContainer}>
            <Text style={styles.title} darkColor="#FBF8F1" lightColor='#004552' >{title}</Text>
            <Text style={textStyle}>{text}</Text>
        </View>
    )
}

export default SubContainer

const styles = StyleSheet.create({
    subContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        fontFamily: "LexendDeca_700Bold"
    },
})