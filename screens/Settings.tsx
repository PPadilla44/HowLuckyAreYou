import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { RootStackScreenProps } from '../types';

const Settings: FC<RootStackScreenProps<"Settings">> = ({}) => {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})