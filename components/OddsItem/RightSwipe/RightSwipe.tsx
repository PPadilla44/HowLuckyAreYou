import { StyleSheet, Text } from 'react-native';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    callback: () => any;
}

const RightSwipe: FC<Props> = ({ callback }) => {
    return (
        <TouchableOpacity testID='rightSwipeBtn' onPress={callback} containerStyle={styles.btn}>
            <Text style={styles.txt}>
                Delete
            </Text>
        </TouchableOpacity>
    );
};

export default RightSwipe

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    txt: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 24,
        fontSize: 24,
    }
})