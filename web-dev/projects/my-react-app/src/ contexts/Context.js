import React, { createContext } from 'react'
import ProductParent from '../Component/ProductParent'
import Cart from '../Component/pages/Cart';
const cartContext = createContext({});

export const DataProvider = ({children}) => {
    return (
        <cartContext.Provider value={{

        }}>
        {children}  
        </cartContext.Provider>
    )
}
export default cartContext
