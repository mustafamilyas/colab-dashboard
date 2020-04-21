import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState({
        username: 'Ilyas',
        id: 1
    });

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;