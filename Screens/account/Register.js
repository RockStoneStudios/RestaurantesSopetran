import { View, Text,Image, StyleSheet, KeyboardAvoidingView,Platform , TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import RegisterForm from '../../components/account/RegisterForm'

const Register = () => {
  return (
    <KeyboardAvoidingView 
     behavior= {Platform.OS === 'android' ? 'padding' : 'height'}
    style={styles.container}
    
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style = {styles.inner}>
        <Image
         source={require("../../assets/restaurante.png")} resizeMode = 'contain'
         style = {styles.image}
        />

     <RegisterForm/>

    </View>
    </TouchableWithoutFeedback>
    
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
     container : {
          flex: 1,
        
      marginTop : 20

     },
     image : {
         height: 150,
         width: '100%'
         
         
    },
     inner : {
        marginTop : 20,
         paddingVertical: 30,
         flex:  1,
         justifyContent : 'space-around',
         marginBottom : 20
     }

})


export default Register