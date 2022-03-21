export type AppearanceName = 'light' | "dark";


// ACTIONS
export declare type SettingsKind = 
'GET_STATE' |
'SET_APPEARANCE';

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
        appearance: { fromDevice: false, appearance: "dark"  }
    }
}

function reducer(state: SettingsState, action: Action): SettingsState {
    const { type, payload } = action;

    switch(type) {
        case "GET_STATE":
            return state;
        case "SET_APPEARANCE":
            return { ...state, data: { appearance: { ...payload } }};

        default:
            return state;
    }
}

export default reducer;