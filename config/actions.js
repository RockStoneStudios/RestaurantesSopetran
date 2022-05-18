import { auth } from "./firebase";
import { database } from "./firebase";


export const isUserLogged = () =>{
    let isLogged = false;
    auth.onAuthStateChanged((user)=>{
        user !==null && (isLogged = true)
    });
    return isLogged;
    
};


export const getCurrentUser = () =>{
    return  auth.currentUser;
}