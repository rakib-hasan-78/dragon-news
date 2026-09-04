import React, { createContext, useContext } from 'react';

const Auth = createContext();
export const useProvider =()=> useContext(Auth);

const AuthProvider = ({children}) => {
    const value = {email:'jak@kaj.com', name:'my name is khan..'}
    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;