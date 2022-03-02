import { StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity, Icon } from '../Themed';


const Dropdown = () => {

    return (
        <TouchableOpacity style={styles.dropArrow} darkColor='black' lightColor='white'>

            <Icon
                name='chevron-down'
                type='evilicon'
                size={40}
            />
        </TouchableOpacity>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    dropArrow: {
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        position: "absolute",
        top: 50,
        zIndex: 10
    }
})