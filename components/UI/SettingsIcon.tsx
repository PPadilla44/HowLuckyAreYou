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
            lightColor='white'
            darkColor={Colors.dark.modal}
            onPress={callBack}
            style={styles.btn}
            containerStyle={styles.container} >
            <Icon
                testID='settingsIcon'
                name='tune'
                size={40}
                lightColor={Colors.dark.modal}
                darkColor='white'
            />
        </TouchableOpacity>
    )
}

export default SettingsIcon

const styles = StyleSheet.create({
    btn: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 15,
    },
    container: {
        width: 50,
        height: 50,
        position: "absolute",
        right: 10,
        bottom: "5%",
        alignItems: "center",
        justifyContent: "center"
    }
})