import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { Action, initialOddsListState, OddsListState,  } from '../../store/oddsItems';
import oddsItemsReducer from "../../store/oddsItems"

const OddsItems = createContext<{ state: OddsListState, dispatch?: Dispatch<Action>  }>({ state: { data: [], fetching:true } });

export const useOddsItems = () => {
    return useContext(OddsItems);
}

type Props = {
    children: ReactNode;
};

export const OddsItemsProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(oddsItemsReducer, initialOddsListState );

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
