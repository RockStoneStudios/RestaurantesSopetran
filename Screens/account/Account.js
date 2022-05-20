import React,{useState,useEffect,useCallback} from 'react'
import { View, Text } from 'react-native'
import { getCurrentUser, isUserLogged } from '../../config/actions';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';
import { auth } from '../../config/firebase';
import Loading from '../../components/Loading';
import { useFocusEffect } from '@react-navigation/native'

const Account = () => {
   const [login,setLogin] = useState(null);
  
     useFocusEffect(

        useCallback(()=>{
            const user = getCurrentUser();
              user ? setLogin(true) : setLogin(false);
            
        },[])
     )
   
      

    

    if(login == null) {
       return <Text><Loading isVisible={true}/> </Text>
    }

  return login ? <UserLogged/> : <UserGuest/>
    
  
}

export default Account