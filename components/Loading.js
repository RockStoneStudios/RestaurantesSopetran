import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = ({isVisible,text}) => {
  return (
   
         <View style={styles.overlay}>
             <ActivityIndicator style={{marginVertical : 10}} size= "large" color="#442484"/>
              {text && <Text style={styles.texto}>{text}</Text>}
         </View>
    
  )
}

const styles = StyleSheet.create({
    overlay : {
        marginTop : 200,
        alignSelf : 'center',
        height: 100,
        width:  200,
        backgroundColor : '#fff',
        borderColor : "#442484",
        borderWidth : 2,
        borderRadius : 10
    },
    texto : {
        color: "#244484",
        fontSize : 18,
        marginLeft : 60
    }
})

export default Loading