import React, { createContext, useEffect, useState } from 'react';
import { authStateHandler, createUsers, emailsigningHandler, logoutHandler } from '../Firebase/firebaseHandlers';


export const Auth = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    
    // ** checking if there is any account login 
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
        emailsigningHandler,
        logoutHandler
      }
    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;