import { View, Text,StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native'
import LoginForm from '../../components/account/LoginForm';

const Login = () => {
    
  return (
      <ScrollView>
         <Image
          source={require("../../assets/restaurante.png")} resizeMode = 'contain'
          style = {styles.image}
         />
         <View style={styles.container}>
            <LoginForm/>
             <CreateAcount/>
         </View>
         <View style = {styles.divider}>

         </View>
      </ScrollView>
  )
}

  const CreateAcount = (props) =>{
    const navigation = useNavigation();
      return (
          <Text
           onPress={()=> navigation.navigate('register')}
          style = {styles.register}>¿Aun no tienes una Cuenta {" "}
             <Text style = {styles.btnRegister}>Registrate</Text>
          </Text>
      )
  }

const styles = StyleSheet.create({
    container : {
         marginHorizontal : 40
    },
    image : {
        height: 150,
        width:  "100%",
        marginVertical : 20
    },
    divider : {
       
        height: 1,
        backgroundColor : "#442484",
        margin: 20
    },
    register :{
       marginTop : 15,
       marginHorizontal : 10,
       alignSelf : 'center',
       color: "#001"
    },
    btnRegister : {
       color: "#442484",
       fontWeight : "bold",
       fontSize : 16
    }
})

export default Login