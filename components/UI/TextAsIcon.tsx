import { StyleProp, TextStyle } from 'react-native'
import React, { FC } from 'react'
import { Text } from '../Themed'

interface Props {
    text: string,
    style: StyleProp<TextStyle>
}

const TextAsIcon: FC<Props> = ({text, style }) => {
    return (
        <Text style={style} >
            {text}
        </Text>
    )
}

export default TextAsIcon