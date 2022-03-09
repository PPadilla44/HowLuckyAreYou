import { increment, reset, updateOdds } from "./utils/reducerFunctions";

export type BtnColorName = 'default' | 'lucky' | 'unlucky' | 'normal';


export const BtnColorObj = {
    unlucky :  "#830909",
    lucky : "#007AFF",
    normal : "#367FA3",
    default : "#325C99"
}

export interface ClickerResults {
    BtnColor: BtnColorName;
    text: string;
}

export interface ClickerState {
    count: number;
    oddsString: string;
    fraction: {
        denominator: number;
        numerator: number;
    };
    didHit: boolean;
    title: string;
    results: ClickerResults
}

export interface Action {
    type: ClickerActionKind;
    payload?: any;
}

export const initialClickerState: ClickerState = {
    count: 0,
    oddsString: "25",
    fraction: {
        numerator: 1,
        denominator: 4
    },
    didHit: false,
    title: "What Are The Odds?",
    results: {
        BtnColor: "default",
        text: ""
    }
}

// ACTIONS
export declare type ClickerActionKind = 'INCREASE' | 'RESET' | 'UPDATE';

// REDUCER
function reducer(state: ClickerState ,  action: Action): ClickerState {
    const { type, payload } = action;
    
    switch (type) {
        case "INCREASE":
            return increment(state);
        case "RESET":
            return reset(state);
        case "UPDATE":
            return updateOdds(state, payload)
        default:
            return state;
    }
}

export default reducer