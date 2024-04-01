import { createContext, useState } from "react";


// create context
export const context = createContext();

// providing

export const ContextProvider = ({children}) => {

    const [state, setState] = useState('dark')
    return (
        <context.Provider value={{state, setState}}>

            {children}

        </context.Provider>
    )
}