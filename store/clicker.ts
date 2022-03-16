import { increment, reset, updateOddsFraction, updateOddsPercent } from "./utils/reducerFunctions";

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
    multiplier: string
    didHit: boolean;
    title: string;
    results: ClickerResults;
    loading: boolean;
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
    multiplier: "1",
    didHit: false,
    title: "What Are The Odds?",
    results: {
        BtnColor: "default",
        text: ""
    },
    loading: false,
}

// ACTIONS
export declare type ClickerActionKind = 'INCREASE' | 'RESET' | 'UPDATE_PERCENT' | 'UPDATE_FRACTION' | "SET_LOADING";

// REDUCER
function reducer(state: ClickerState ,  action: Action): ClickerState {
    const { type, payload } = action;
    
    switch (type) {
        case "INCREASE":
            return increment(state);
        case "RESET":
            return reset(state);
        case "UPDATE_PERCENT":
            return updateOddsPercent(state, payload);
        case "UPDATE_FRACTION":
            return updateOddsFraction(state, payload);
        case "SET_LOADING":
            return { ...state, loading: payload };
        default:
            return state;
    }
}

export default reducer