import { StyleSheet } from 'react-native'
import React from 'react'
import { View } from '../Themed';
import Colors from '../../constants/Colors';

const Separator = () => <View style={styles.itemSeparator} />;

export default Separator

const styles = StyleSheet.create({
    itemSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.light.input,
        opacity: .5
    }
})