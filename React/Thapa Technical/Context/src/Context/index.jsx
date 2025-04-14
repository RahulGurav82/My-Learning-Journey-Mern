import { createContext } from 'react'

export const BioContext = createContext();

export const BioProvider = ({children}) => {
    const Name = "Rahul";
    const Age = 21;

    return (
        <BioContext.Provider value={{Name, Age}}>
            {children}
        </BioContext.Provider>
    )
}