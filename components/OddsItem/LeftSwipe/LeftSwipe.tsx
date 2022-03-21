import { StyleSheet, Text } from 'react-native'
import React, { FC } from 'react'
import Colors from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    callback: () => any;
}

const LeftSwipe: FC<Props> = ({ callback }) => {
    return (
        <TouchableOpacity testID='leftSwipeBtn' onPress={callback} containerStyle={styles.btn}>
            <Text style={styles.txt}>
                Share
            </Text>
        </TouchableOpacity>
    );
};

export default LeftSwipe

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.shared.text,
        justifyContent: 'center',
        alignItems: "flex-start"
    },
    txt: {
        color: 'white',
        fontWeight: '600',
        paddingHorizontal: 30,
        paddingVertical: 20,
        fontSize: 24
    }
})