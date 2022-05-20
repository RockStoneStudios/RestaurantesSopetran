import React from 'react'
import { View, Text , TouchableOpacity,StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import { closeSession } from '../../config/actions';


const UserLogged = () => {
   const navigation = useNavigation();
  return (
    <View>
      <Text>UserLogged . . .</Text>
     <TouchableOpacity 
       onPress={()=> {closeSession(), navigation.navigate('restaurantes')}}
       style={styles.boton}>
         <Text style={styles.btnText}>Cerrar Sesion</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
     boton : {
        backgroundColor : "#244484",
        marginHorizontal : 50,
        height: 32,
        marginTop : 20,
        borderRadius : 12
     },
     btnText : {
        color: '#ffe',
        textAlign : 'center',
        marginVertical : 5,
        fontSize : 16,
        fontWeight : 'bold'
     }
})

export default UserLogged