import { Pressable, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Icon } from '../Themed'

interface Props {
    navigation: any
    name: string,
    size: number,
    type: string
}

const PressableIcon: FC<Props> = ({ navigation, name, size, type }) => {
    return (
        <Pressable
            onPress={() => navigation.navigate('Modal')}
            style={({ pressed }) => ({
                opacity: pressed ? 0.3 : 1,
            })}>
            <Icon
                name={name}
                type={type}
                size={size}
            />
        </Pressable>
    )
}

export default PressableIcon

const styles = StyleSheet.create({})