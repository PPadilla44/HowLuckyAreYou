import React, { createContext, useContext } from 'react';

const CustomContext = createContext(null);

export function useCustomContext() {
    return useContext(CustomContext);
}

export default CustomContext;