import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
        const [status, setStatus] = useState('login')

    return (
        <AuthContext.Provider value={{status, setStatus}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

