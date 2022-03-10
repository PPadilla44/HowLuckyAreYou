import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors';


const LeftSwipe = () => {
    return (
        <View style={styles.Btn}>
            <Text style={styles.Txt}>
                Share
            </Text>
        </View>
    );
};

export default LeftSwipe

const styles = StyleSheet.create({
    Btn: {
        backgroundColor: Colors.shared.text,
        justifyContent: 'center',
        alignItems: "flex-start"
    },
    Txt: {
        color: 'white',
        fontWeight: '600',
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
})