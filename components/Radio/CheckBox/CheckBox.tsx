import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { CheckBox as DCheck } from "../../Themed"

interface Props {
    title: string;
    checked: boolean;
    setChecked: () => void;
}

const CheckBox: FC<Props> = ({ title, checked, setChecked }) => {
    return (
        <DCheck
            iconRight={true}
            title={title}
            checkedIcon='dot-circle-o'
            uncheckedIcon='circle-o'
            checked={checked}
            onPress={setChecked}
            containerStyle={{ backgroundColor: "" ,borderColor: "transparent" }}
            wrapperStyle={{ justifyContent: "space-between" }}
        />
    )
}

export default CheckBox