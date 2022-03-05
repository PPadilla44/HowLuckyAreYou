import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import PressableIcon from "../components/PressableIcon";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";

export const MainScreenOptions = (colorScheme: "light" | "dark", navigation: NativeStackNavigationProp<RootStackParamList>) => ({
    headerTitle: "",
    headerStyle: { backgroundColor: Colors[colorScheme].background },
    headerShadowVisible: false,
    headerRight: () => <PressableIcon navigation={navigation} name='gear' type='evilicon' size={40} />,
})

export const ModalScreenOptions = (colorScheme: "light" | "dark", navigation: NativeStackNavigationProp<RootStackParamList>) => ({
    headerTitle: "",
    headerStyle: { backgroundColor: Colors[colorScheme].background },
    headerShadowVisible: false,
    headerRight: () => <PressableIcon navigation={navigation} name='globe' type='font-awesome' size={35} />,
})