import { increment } from "./utils/reducerFunctions";

export interface ClickerState {
    count: number;
    odds: number;
    didHit: boolean;
    results: {
        BtnColor: string;
        text: string;
    };
}

export interface Action {
    type: ClickerActionKind,
    payload?: any
}

export const initialClickerState = {
    count: 0,
    odds: .1,
    didHit: false,
    results: {
        BtnColor: "",
        text: ""
    }
}

// ACTIONS
export enum ClickerActionKind {
    INCREASE = "INCREASE",
    RESET = "RESET"
}

// REDUCER
function reducer(state: ClickerState = initialClickerState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case ClickerActionKind.INCREASE:
            return increment(state)
        case ClickerActionKind.RESET:
            return {...initialClickerState}
        default:
            return state;
    }
}

export default reducer