import { StyleProp, StyleSheet, TextStyle,  } from 'react-native'
import { View, Text } from "../Themed";
import React, { FC } from 'react';
import Colors from "../../constants/Colors";

export interface Props {
    textStyle: StyleProp<TextStyle>
    title: string,
    text: string
}

const SubContainer: FC<Props> = ({ textStyle, title, text }) => {
    return (
        <View testID='SubContainer' style={styles.subContainer}>
            <Text testID='title' style={styles.title}>{title}</Text>
            <Text testID='text' style={textStyle}>{text}</Text>
        </View>
    )
}

export default SubContainer

const styles = StyleSheet.create({
    subContainer: {
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Futura",
        color: Colors.shared.text
    },
})