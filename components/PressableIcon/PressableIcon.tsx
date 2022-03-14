import { Pressable } from 'react-native'
import React, { FC } from 'react'
import { Icon } from '../Themed'

interface Props {
    callBack: () => any,
    name: string,
    size: number,
    type: string
}

const PressableIcon: FC<Props> = ({ callBack, name, size, type }) => {
    return (
        <Pressable
            testID='pressableIconBtn'
            onPress={callBack}
            style={({ pressed }) => ({
                opacity: pressed ? 0.3 : 1
            })}>
            <Icon
                testID='pressableIcon'
                name={name}
                type={type}
                size={size}
            />
        </Pressable>
    )
}

export default PressableIcon