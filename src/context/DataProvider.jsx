import React, { useState } from 'react'
import { useContext ,createContext } from 'react'

export const MainDataContext = createContext()

const DataProvider = ({children}) => {
    const [html,setHTML] = useState('')
    const [css,setCSS] = useState('')
    const [js,setJS] = useState('')
    return (
        <MainDataContext.Provider value={{html,css,js,setHTML,setCSS,setJS}}>
            {children}
        </MainDataContext.Provider>
    )
}

export default DataProvider