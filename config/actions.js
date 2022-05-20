import { Firestore } from "firebase/firestore";
import { auth } from "./firebase";
import {getAuth, createUserWithEmailAndPassword,signOut ,signInWithEmailAndPassword} from 'firebase/auth'
import { database } from "./firebase";



export const isUserLogged = () =>{
    let isLogged = false;
    auth.onAuthStateChanged((user)=>{
        user !==null && (isLogged = true)
    });
    return isLogged;
    
};

// Devuelve si el usuario esta logueado en el momento
export const getCurrentUser = () =>{
    return  auth.currentUser;
}

//Registrar Usuario
export const registerUser = async (email,password) =>{
     const auht = getAuth();
    const result = { statusResponse : true, error : null}
     try {
           await createUserWithEmailAndPassword(auth,email,password);
     }catch(error){
         result.statusResponse = false;
         result.error = "Este correo ya ha sido registrado"
     }
    return result
}

export const  closeSession = () => {
    return signOut(auth);
}



//Login Usuario

export const siginWithEmail = async(email,password) =>{
    const result = {statusResponse : true , error : null}
     try {
        await signInWithEmailAndPassword(auth,email,password)
     }catch(error){
         result.statusResponse = false;
         result.error = "Usuario o contraseña no valida";
     }
     return result;
}