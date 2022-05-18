import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { getCurrentUser, isUserLogged } from '../../config/actions';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';
import { auth } from '../../config/firebase';
import Loading from '../../components/Loading';


const Account = () => {
   const [login,setLogin] = useState(null);
  
    
    useEffect(()=>{
     
        setLogin(isUserLogged());
    },[])
   
      

    

    if(login == null) {
       return <Text><Loading isVisible={true}/> </Text>
    }

  return login ? <UserLogged/> : <UserGuest/>
    
  
}

export default Account