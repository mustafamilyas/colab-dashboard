import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { isOnLocalStorage, setLocalStorage, removeLocalStorage } from '../utils/helper';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const login = ({email, password}) => {
        setUser({ email, password })
        setLocalStorage("auth", email);
        history.push('/');
    }
    
    const logout =  () => {
        setUser({
            email: "",
            password: ""
        })
        removeLocalStorage("auth");
        history.push('/login');
    }

    const checklogin = () => {
        return isOnLocalStorage("auth")
    }

    const importedValue = {
        user,
        login,
        logout,
        checklogin
    }

    return (
        <AuthContext.Provider value={importedValue}>
            {props.children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;