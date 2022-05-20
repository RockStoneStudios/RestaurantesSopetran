import React,{useState,useRef,useEffect} from 'react'
import { View, Text , TouchableOpacity,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import { closeSession, getCurrentUser } from '../../config/actions';
import Toast from 'react-native-easy-toast';
import Loading from '../../components/Loading';
import InfoUser from '../../components/account/InfoUser';

const UserLogged = () => {
   const toastRef = useRef();
   const navigation = useNavigation();
   const [loading,setLoading] = useState(false);
   const [loadingText,setLoadingText] = useState("");
   const  [user,setUser] = useState(null);
 
     useEffect(()=>{
        setUser(getCurrentUser())
     },[])
    

  return (
    <View style={styles.container}>
       {
          user && <InfoUser user = {user}/>
       }
        
        <Text>Account Options</Text>
      <TouchableOpacity 
        onPress={()=> {closeSession(), navigation.navigate('restaurantes')}}
        style={styles.boton}>
          <Text style={styles.btnText}>Cerrar Sesion</Text>
      </TouchableOpacity>
      <Toast ref={toastRef} position = 'center' opacity={0.9} />
      {loading && <Loading text={loadingText}/> }
    </View>
  )
}

const styles = StyleSheet.create({
     boton : {
        
        backgroundColor : "#fff",
        marginTop : 30,
        borderRadius : 12,
        borderTopWidth : 1,
        borderTopColor : "#442484",
        borderBottomWidth : 1,
        borderBottomColor : "#442484",
        paddingVertical : 10
     },
     btnText : {
        color: "#442484",
        textAlign : 'center',
        paddingVertical : 4,
        fontSize : 17,
        fontWeight : 'bold'
     },
     container : {
         minHeight : "100%",
         backgroundColor : "#f9f8f8"
     }
})

export default UserLogged