import React, { createContext, useCallback, useContext, useState } from 'react'

const AuthContext = createContext();
    export const AuthProvider = ({children}) => {
        const[user, setUser] = useState('');
        JSON.parse(localStorage.getItem("user")) || null

      
        const signup =(fullname,username,password) => {
            const newUser = {fullname,username,password};
            localStorage.setItem("user",JSON.stringify(newUser) )
            setUser(newUser)
        }
        const login=(username,password) => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if(storedUser && 
                storedUser.username === username &&
                storedUser.password === password
            ){
                setUser(storedUser);
                return true;
            }
            return false;
        }
        const logout = () => {
            setUser(null);
        }

 return(

     <AuthContext.Provider value={{user, login, signup, logout}}>
        {children}
        </AuthContext.Provider>

    )
 
}

export const useAuth = () => useContext(AuthContext);