import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { Action, initialClickerState, ClickerState } from '../../store/clicker';
import clickerReducer from "../../store"

const ClickerContext = createContext<{ state: ClickerState, dispatch?: Dispatch<Action>  }>({ state: initialClickerState });

export const useClicker = () => {
    return useContext(ClickerContext);
}

type Props = {
    children: ReactNode;
};

export const ClickerProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(clickerReducer, initialClickerState);

    const providerState = {
        state,
        dispatch
    }

    return (
        <ClickerContext.Provider value={providerState}>
            {children}
        </ClickerContext.Provider>
    )
}
