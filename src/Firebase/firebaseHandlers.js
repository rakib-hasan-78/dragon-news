
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
    return user;


    } catch (error) {
        console.log(error.message);
    }
}

export {createUsers};