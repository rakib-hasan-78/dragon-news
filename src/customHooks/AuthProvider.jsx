import React, { createContext, useContext } from 'react';
import { createUsers } from '../Firebase/firebaseHandlers';

const Auth = createContext();
export const useProvider =()=> useContext(Auth);

const AuthProvider = ({children}) => {
    const value = { 
        createUsers,
      }
    return (
        <Auth.Provider value={value}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;