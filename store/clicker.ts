import { increment } from "./utils/reducerFunctions";

export declare type BtnColor = 'default' | 'lucky' | 'unlucky' | 'normal';

export const BtnColorObj = {
    unlucky :  "#830909",
    lucky : "#007AFF",
    normal : "#367FA3",
    default : "#325C99"
}

export interface ClickerState {
    count: number;
    odds: number;
    didHit: boolean;
    results: {
        BtnColor: BtnColor;
        text: string;
    };
}

export interface Action {
    type: ClickerActionKind,
    payload?: any
}

export const initialClickerState: ClickerState = {
    count: 0,
    odds: .1,
    didHit: false,
    results: {
        BtnColor: "default",
        text: ""
    }
}

// ACTIONS
export declare type ClickerActionKind = 'INCREASE' | 'RESET';

// export enum ClickerActionKind {
//     INCREASE = "INCREASE",
//     RESET = "RESET"
// }

// REDUCER
function reducer(state: ClickerState = initialClickerState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case "INCREASE":
            return increment(state)
        case "RESET":
            return {...initialClickerState}
        default:
            return state;
    }
}

export default reducer