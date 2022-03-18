import { OddsItemInterface } from "../types";


// ACTIONS
export declare type OddsItemsKind =
    'GET_STATE' |
    'ADD_ITEM' |
    'SET_FETCHING' |
    'SET_STATE'


export interface Action {
    type: OddsItemsKind;
    payload?: any;
}

export interface OddsListState {
    fetching: boolean,
    data: OddsItemInterface[]
};

export const initialOddsListState: OddsListState = {
    fetching: true,
    data: []
}

// REDUCER
function reducer(state: OddsListState, action: Action): OddsListState {
    const { type, payload } = action;

    switch (type) {
        case "GET_STATE":
            return { ...state, data: JSON.parse(payload) };
        case "SET_STATE":
            return { ...state, data: payload }
        case "ADD_ITEM":
            return { ...state, data: [ payload, ...state.data] };
        case "SET_FETCHING":
            return { ...state, fetching: payload }
        default:
            return state;
    }
}

export default reducer