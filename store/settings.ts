export type AppearanceName = 'light' | "dark";


// ACTIONS
export declare type SettingsKind =
    'GET_STATE' |
    'SET_APPEARANCE' |
    "SET_FETCHING";

export interface Action {
    type: SettingsKind;
    payload?: any;
}


export interface SettingsInterface {
    appearance: { fromDevice: boolean, appearance: AppearanceName }
}

export interface SettingsState {
    fetching: boolean;
    data: SettingsInterface;
}

export const initialSettingsState: SettingsState = {
    fetching: true,
    data: {
        appearance: { fromDevice: false, appearance: "dark" }
    }
}

function reducer(state: SettingsState, action: Action): SettingsState {
    const { type, payload } = action;

    switch (type) {
        case "SET_FETCHING":
            return { ...state, fetching: payload};
        case "GET_STATE":
            return { ...state, data: JSON.parse(payload)  };
        case "SET_APPEARANCE":
            return { ...state, data: payload };

        default:
            return state;
    }
}

export default reducer;