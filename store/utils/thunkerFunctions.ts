import AsyncStorage from "@react-native-async-storage/async-storage";
import { OddsItemInterface } from "../../types";
import { OddsListState, Action } from "../oddsItems";


export const addItem = async (state: OddsListState, dispatch: React.Dispatch<Action> | undefined, payload: OddsItemInterface) => {
    try {
        dispatch!({ type: "ADD_ITEM", payload: payload });
        const jsonValue = JSON.stringify([...state.data, payload]);
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