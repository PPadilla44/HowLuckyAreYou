import { StyleSheet } from 'react-native'
import { View } from '../../components/Themed';
import React, { FC, useState } from 'react'
import CheckBox from './CheckBox'
import Colors from '../../constants/Colors';
import { useSettings } from '../contexts/useSettings';


const Radio = () => {

    const options = ["automatic", "dark", "light"];
    const { state, dispatch } = useSettings();
    const { data } = state;
    
    const handleChange = (index: number, option: string) => {
        if(option === "automatic") {
            dispatch!({ type: "SET_APPEARANCE", payload: { fromDevice: true } })

        } else {
            dispatch!({ type: "SET_APPEARANCE", payload: { fromDevice: false, appearance: option } })
        }
    }

    return (
        <View darkColor="#252525" lightColor={Colors.light.input} style={styles.container}>

            {
                options.map((o, i) =>
                    <CheckBox
                        key={`check-${i}`}
                        title={o[0].toUpperCase() + o.substring(1)}
                        checked={data.appearance.fromDevice ? i === 0 : data.appearance.appearance === o}
                        setChecked={() => handleChange(i, o)}
                    />
                )
            }


        </View>
    )
}

export default Radio

const styles = StyleSheet.create({
    container: {
        borderRadius: 15
    }
})