import { NativeStackNavigationOptions, NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import PressableIcon from "../components/PressableIcon";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import SimulateButton from "../components/SimulateButton";

export const MainScreenOptions = (colorScheme: "light" | "dark", navigation: NativeStackNavigationProp<RootStackParamList>) 
: NativeStackNavigationOptions => ({
    headerTitle: "",
    headerStyle: { backgroundColor: Colors[colorScheme].background },
    headerShadowVisible: false,
    headerRight: () => <PressableIcon callBack={() => navigation.navigate('Modal')} name='gear' type='evilicon' size={40} />,
    headerLeft: () => <SimulateButton />

})

export const ModalScreenOptions = (colorScheme: "light" | "dark", navigation: NativeStackNavigationProp<RootStackParamList>)
: NativeStackNavigationOptions => ({
    headerTitle: "",
    headerStyle: { backgroundColor: Colors[colorScheme].modal },
    headerShadowVisible: false,
    headerRight: () => <PressableIcon callBack={() => console.log("GLOBE")} name='globe' type='font-awesome' size={35} />,
})