import { StyleSheet, Text, View , TextInput, TouchableOpacity,Alert} from 'react-native'
import React, {createRef,useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'

import {registerUser} from '../../config/actions'
import Loading from '../Loading';

const RegisterForm = () => {
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [confirm,setConfirm] = useState('');
   const [showPassword,setShowPassword] = useState(false);
   const [loading,setLoading] = useState(false);
    const navigation = useNavigation();
    const inputRef = createRef();
  
    
      const doRegisterUser = async() => {
        
           if(!email.includes('@') || !email.endsWith('.com')) {
               Alert.alert(
                   'Email invalido'
               )
           }

           if(password.length <6 ){
               Alert.alert(
                    'El password debe tener minimo 6 caracteres'
               )
               
           }

           if(confirm !== password){
               Alert.alert(
                    'El password no coiciden'
               )
           }
            setLoading(true);
            const result = await registerUser(email,password);
            setLoading(false);
            if(!result.statusResponse){
                  Alert.alert(
                       result.error
                  )
                  return;
             }
              navigation.navigate('account');
           
      }

  return (
      
    <View style = {styles.form}>
        
       <View style= {styles.containerInput}>
            <TextInput
            keyboardType= 'email-address'
            onChangeText={text => setEmail(text) }
            style = {styles.textoInput}
            placeholder='Ingrese tu email '
            placeholderTextColor={"#244484"}   
            returnKeyType = 'next'     
            blurOnSubmit = {false}
            defaultValue = {email}
            onSubmitEditing={()=> inputRef.current.focus()}
            
        />
      
       </View>
       
         <View style={styles.containerInput}>
            <TextInput
                onChangeText={text=> setPassword(text)}
                style = {styles.textoInput}
                placeholder='Ingresa tu Contraseña'
                secureTextEntry = {!showPassword}
                placeholderTextColor={"#244484"}   
                returnKeyType = 'next'
                blurOnSubmit = {false}
                defaultValue = {password}
                onSubmitEditing={()=> inputRef.current.focus()}
                ref = {inputRef}

            />
            <Icon 
             style ={{position : 'absolute' , right : 30}}
            onPress={()=> setShowPassword(!showPassword)}
            name={showPassword ? 'eye-off-outline' : 'eye-outline' }  color= "#606" size={22} />
         </View>
          
         
         <View style={styles.containerInput}>

            <TextInput
                onChangeText={text => setConfirm(text)}
                style = {styles.textoInput}
                placeholder='Confirma tu Contraseña'
                secureTextEntry = {!showPassword}
                returnKeyType = 'next' 
                blurOnSubmit = {false}
                placeholderTextColor={"#244484"}  
                onSubmitEditing={()=> inputRef.current.focus()}
                defaultValue = {confirm}
                ref = {inputRef}
                

            />
            <Icon 
               style ={{position : 'absolute' , right : 30}}
               onPress={()=> setShowPassword(!showPassword)}
               name={showPassword ? 'eye-off-outline' : 'eye-outline' }
            color= "#607" size={22} />
         </View>
         

        <TouchableOpacity 
            onPress={doRegisterUser}
            style = {styles.boton}>
            <Text style={styles.btnTexto}>Registrarse</Text>
        </TouchableOpacity>
        {loading && (<Loading text= "Creando"/>)}
        
    </View>
  )
}

const defaultFormValues = () => {
    return {
        email : "",
        password : "",
        confirm : ""
    }
}



const styles = StyleSheet.create({
    form : {
       marginTop : 50,
       paddingVertical : 20

    },
     containerInput : {
         marginHorizontal : 20,
         flexDirection : 'row',
         alignItems : 'center'
     },
     boton : {
        marginTop : 30,
        backgroundColor : "#442484",
        height: 40,
        borderRadius : 8,
        width: "90%",
        marginHorizontal : 20
        


     },
     btnTexto : {
         textAlign : 'center',
         color: "#ffe",
         fontSize : 18,
         fontWeight : 'bold',
         marginVertical : 5
     },
    textoInput : {
        fontSize : 16,
        padding: 10,
        width: "90%",
        height: 50,
        marginLeft : 20,
        borderBottomColor : "#001",
        borderBottomWidth : 1
    }
})


export default RegisterForm
