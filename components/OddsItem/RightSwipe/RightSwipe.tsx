import { StyleSheet } from 'react-native';
import React from 'react';
import { View, Text } from '../../Themed';

const RightSwipe = () => {
    return (
        <View style={styles.Btn} >
            <Text style={styles.Txt}>
                Delete
            </Text>
        </View>
    );
};

export default RightSwipe

const styles = StyleSheet.create({
    Btn: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    Txt: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
})