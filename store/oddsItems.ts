import { OddsItemInterface } from "../types";

// ACTIONS
export declare type OddsItemsKind =
    'GET_STATE'


export interface Action {
    type: OddsItemsKind;
    payload?: any;
}

// REDUCER
function reducer(state: OddsItemInterface[], action: Action): OddsItemInterface[] {
    const { type, payload } = action;

    switch (type) {
        case "GET_STATE":
            return [...state]
        default:
            return state;
    }
}

export default reducer