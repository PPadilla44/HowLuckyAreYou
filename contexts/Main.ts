import { useReducer } from "react";
import { View } from "react-native";
import CustomContext from "./context";

export interface MainState {
    count: number;
    odds: number;
    didHit: boolean;
    results: {
        BtnColor: string;
        text: string;
    };
}

export enum MainActionKind {
    INCREASE = "INCREASE",
}

export interface Action {
    type: MainActionKind,
    payload?: any
}

export const initialMainState = {
    count: 0,
    odds: .1,
    didHit: false,
    results: {
        BtnColor: "",
        text: ""
    }
}

function increment(state: MainState) {
    console.log("****************");

    const tempCount = state.count + 1;

    const max = 1 / (state.odds);

    const randomNumFromMax = Math.ceil(Math.random() * max);

    console.log(randomNumFromMax, max);

    if (randomNumFromMax === max) {
        console.log("GOT IT");
        const userOdds = tempCount / max;
        let tempResults
        if (userOdds < 1) {
            tempResults = { BtnColor: "green", text: "YOU ARE REALLY LUCKY" };
        } else if (userOdds > 1) {
            tempResults = { BtnColor: "red", text: "YOU ARE NOT LUCKY" };
        } else {
            tempResults = { BtnColor: "blue", text: "YOU ARE normal" };
        }
        const newState = {
            ...state,
            count: tempCount,
            results: tempResults,
            didHit: true
        }
        console.log(newState);

        return newState
    }

    return {
        ...state,
        count: tempCount
    }
}

export function mainReducer(state: MainState = initialMainState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case MainActionKind.INCREASE:
            return increment(state)

        default:
            return state;
    }
}

// const ParentComponent = ({ children }) => {

//     const [userState, usersDispatch] = useReducer(mainReducer, initialMainState);

//     const providerState = {
//         userState,
//         usersDispatch
//     }

//     return (
//         <View>
//         </View>
//     )
// }

// export default ParentComponent;