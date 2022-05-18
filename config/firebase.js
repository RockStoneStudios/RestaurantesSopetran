import  {initializeApp,getApps} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIK9TLeTRx_L4xUl-B-Bc1PeydDQYBpLk",
    authDomain: "restaurantes-40f7f.firebaseapp.com",
    projectId: "restaurantes-40f7f",
    storageBucket: "restaurantes-40f7f.appspot.com",
    messagingSenderId: "978966418706",
    appId: "1:978966418706:web:aca31e2ec1c6e17be24fcb"
  };

  if(getApps.length ===0 ){
      initializeApp(firebaseConfig)
  }

  export const auth = getAuth();
  export const database = getFirestore();
  