import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { OddsItemInterface } from "../../types";
import { OddsListState, Action } from "../oddsItems";
import { SettingsState, Action as SAction, initialSettingsState, SettingsInterface, AppearanceName } from "../settings";


export const addItem = async (state: OddsListState, dispatch: React.Dispatch<Action> | undefined, payload: OddsItemInterface) => {
    try {
        dispatch!({ type: "ADD_ITEM", payload: payload });
        const jsonValue = JSON.stringify([payload, ...state.data]);
        await AsyncStorage.setItem(`@OddsItems`, jsonValue);

    } catch (err) {
        console.log(err);
    }
}

export const fetchOddsList = async (dispatch: React.Dispatch<Action> | undefined) => {
    dispatch!({ type: "SET_FETCHING", payload: true })
    try {
        const data = await AsyncStorage.getItem("@OddsItems");
        if (data) {
            dispatch!({ type: "GET_STATE", payload: data })
        } else {
            dispatch!({ type: "GET_STATE", payload: "[]" })
        }
    } catch (err) {
        console.log(err);
    } finally {
        dispatch!({ type: "SET_FETCHING", payload: false })
    }
}

export const removeItem = async (state: OddsListState, dispatch: React.Dispatch<Action> | undefined, payload: string) => {

    try {
        const newState = state.data.filter((d) => d.id !== payload);
        dispatch!({ type: "SET_STATE", payload: newState });
        const jsonValue = JSON.stringify(newState);
        await AsyncStorage.setItem(`@OddsItems`, jsonValue);
    } catch (err) {
        console.log(err);
    }

}


// SETTINGS
export const fetchSettings = async (dispatch: React.Dispatch<SAction> | undefined) => {

    dispatch!({ type: "SET_FETCHING", payload: true })
    try {
        const data = await AsyncStorage.getItem("@Settings");

        if (data) {
            dispatch!({ type: "GET_STATE", payload: data })
        } else {
            dispatch!({ type: "GET_STATE", payload: JSON.stringify(initialSettingsState.data) })
        }

    } catch (err) {
        console.log(err);
    } finally {
        dispatch!({ type: "SET_FETCHING", payload: false })
    }
}

export const setAppearance = async (state: SettingsState, dispatch: React.Dispatch<SAction> | undefined, payload: { appearance?: string, fromDevice: boolean }) => {
    try {
        const newData: SettingsInterface = {
            ...state.data,
            appearance: {
                appearance: payload.appearance ? payload.appearance as AppearanceName : Appearance.getColorScheme() as AppearanceName,
                fromDevice: payload.fromDevice
            }
        }
        dispatch!({ type: "SET_APPEARANCE", payload: newData });

        const jsonValue = JSON.stringify(newData);
        await AsyncStorage.setItem(`@Settings`, jsonValue);
    } catch (err) {
        console.log(err);
    }
}