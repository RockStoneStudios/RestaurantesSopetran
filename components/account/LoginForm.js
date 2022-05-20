import React, {createRef,useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native'
import Loading from '../Loading';
import { siginWithEmail } from '../../config/actions';


const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const [loading,setLoading] = useState(false);
    const inputRef = createRef();
    const navigation = useNavigation();

    const doLoginUser = async () => {
          if([email,password].includes("")) {
             Alert.alert(
                  'Email o Password Incorrectos'
             )
             return;
          }
          setLoading(true);
          const result = await siginWithEmail(email,password);
          setLoading(false);
          if(!result.statusResponse){
              Alert.alert(
                  'Error de Auth'
              )
              return;
          }
          navigation.navigate('account');
    }




  return (
    <View style={styles.container}>
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
              style = {{position : 'absolute', right : 0}}
            onPress={()=> setShowPassword(!showPassword)}
            name={showPassword ? 'eye-off-outline' : 'eye-outline' }  color= "#606" size={22} />
         </View>
         <TouchableOpacity 
            onPress={doLoginUser}
            style = {styles.boton}>
            <Text style={styles.btnTexto}>Iniciar Sesion</Text>
        </TouchableOpacity>
         {loading &&  <Loading text= "Iniciando Session"/>} 
       
       
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    containerInput : {
        marginHorizontal : 5,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start'
    },
    textoInput :{
        fontSize : 16,
        padding: 5,
        width: "95%",
        height: 50,
        borderBottomColor : "#001",
        borderBottomWidth : 1
        
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
    }
})

export default LoginForm;