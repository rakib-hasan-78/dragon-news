import React, { createContext, useContext, useEffect, useState } from 'react';
import { authStateHandler, createUsers } from '../Firebase/firebaseHandlers';


export const Auth = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    useEffect(()=>{
        const unsubscribe = authStateHandler((currentUser)=>{
            setUser(currentUser);
        });
        return ()=> unsubscribe();
    },[])
    const value = { 
        user,
        setUser,
        createUsers,
      }
    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;