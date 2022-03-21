import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { Appearance } from "react-native";
import settingsReducer from "../../store/settings"
import { Action, initialSettingsState, SettingsState } from "../../store/settings";

const Settings = createContext<{ state: SettingsState , dispatch?: Dispatch<Action> }>( { state: initialSettingsState } );

export const useSettings = () => {
    return useContext(Settings);
}


type Props = {
    children: ReactNode;
};

export const SettingsProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(settingsReducer, initialSettingsState );

    if(state.data.appearance.fromDevice) {
        state.data.appearance.appearance = Appearance.getColorScheme() as "light" | "dark";
    }

    const providerState = {
        state,
        dispatch
    }

    return (
        <Settings.Provider value={providerState}>
            {children}
        </Settings.Provider>
    )
}
