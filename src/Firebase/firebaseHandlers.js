
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {auth} from "./Firebase.init";


// creating users using email & password ===>

const createUsers = async(email, password,name, url)=>{

    try {
    const result = await createUserWithEmailAndPassword(
        auth, 
        email, 
        password
    )
    // newly created user===>
    const user = result.user;
    await updateProfile(user,{
        displayName: name,
        photoURL:url,
    });

    console.log(user);
    return {success:true, user};


    } catch (error) {
        return {success:false, error: error.message, code: error.code}
    }
};
// login state observer from firebase==>

const authStateHandler =(cb)=>{
    return onAuthStateChanged(
        auth, 
        cb
    )
}
// signing with email&password 
const emailsigningHandler = (email, password) => {
    return signInWithEmailAndPassword(
        auth,
        email,
        password
    )
    .then((result) => {
        return {
            success: true,
            user: result.user
        };
    })
    .catch((error) => {
        return {
            success: false,
            error: error.message,
            code: error.code
        };
    });
};

// forgot password handler 

const forgotPasswordHandler =(email)=>{

    return sendPasswordResetEmail(auth, email)
}

// logout from the application handler

const logoutHandler = (cb) => {
    return signOut(auth).then(cb)
}

export {
    createUsers, 
    authStateHandler,
    logoutHandler,
    emailsigningHandler,
    forgotPasswordHandler
};
