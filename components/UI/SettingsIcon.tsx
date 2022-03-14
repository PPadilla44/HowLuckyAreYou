import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { Icon, TouchableOpacity } from '../Themed'
import Colors from '../../constants/Colors'

interface Props {
    callBack: () => any;
}

const SettingsIcon: FC<Props> = ({ callBack }) => {
    return (
        <TouchableOpacity
            testID='settingsBtn'
            onPress={callBack}
            style={styles.btn}
            containerStyle={styles.container} >
            <Icon
                testID='settingsIcon'
                name='tune'
                size={45}
                color="white"
            />
        </TouchableOpacity>
    )
}

export default SettingsIcon

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "transparent",
    },
    container: {
        width: 55,
        height: 55,
        position: "absolute",
        right: 10,
        bottom: "5%",
        borderRadius: 20,
        backgroundColor: Colors.shared.text,
        alignItems: "center",
        justifyContent: "center"
    }
})