import { NativeStackNavigationOptions, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import PressableIcon from "../components/PressableIcon";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import SimulateButton from "../components/SimulateButton";
import { View } from "react-native";
import { Button } from "react-native-elements";

export const MainScreenOptions = (colorScheme: "light" | "dark", navigation: NativeStackNavigationProp<RootStackParamList>)
    : NativeStackNavigationOptions => ({
        headerTitle: "",
        headerStyle: { backgroundColor: Colors[colorScheme].background },
        headerShadowVisible: false,
        headerRight: () =>
            <View style={{ flexDirection: "row", width: 75, justifyContent: "space-between" }}>
                <PressableIcon callBack={() => navigation.navigate('Settings')} name='gear' type='evilicon' size={32} />
                <PressableIcon callBack={() => navigation.navigate('Modal')} name='plus' type='evilicon' size={32} />
            </View>,
        headerLeft: () => <SimulateButton />

    })

export const ModalScreenOptions = (colorScheme: "light" | "dark", navigation: NativeStackNavigationProp<RootStackParamList>)
    : NativeStackNavigationOptions => ({
        headerTitle: "",
        headerStyle: { backgroundColor: Colors[colorScheme].modal },
        headerShadowVisible: false,
        headerLeft: () => <Button title="Cancel" titleStyle={{ color: Colors.shared.icon }} buttonStyle={{ padding: 0, backgroundColor: "" }} onPress={() => navigation.goBack()} />
    })

export const SettingsScreenOptions = (colorScheme: "light" | "dark", navigation: NativeStackNavigationProp<RootStackParamList>)
: NativeStackNavigationOptions => ({
    headerTitle: "Settings",
    headerLeft: () => <PressableIcon callBack={() => navigation.goBack()} name="arrowleft" size={32} type="antdesign" />
})