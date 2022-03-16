import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { Action,  } from '../../store/oddsItems';
import oddsItemsReducer from "../../store/oddsItems"
import { OddsItemInterface } from '../../types';

const OddsItems = createContext<{ state: OddsItemInterface[], dispatch?: Dispatch<Action>  }>({ state: [] });

export const useOddsItems = () => {
    return useContext(OddsItems);
}

type Props = {
    children: ReactNode;
};

export const OddsItemsProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(oddsItemsReducer, [] );

    const providerState = {
        state,
        dispatch
    }

    return (
        <OddsItems.Provider value={providerState}>
            {children}
        </OddsItems.Provider>
    )
}
