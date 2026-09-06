import React, { createContext, useContext } from 'react';
import { createUsers } from '../Firebase/firebaseHandlers';


export const Auth = createContext();

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