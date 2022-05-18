import React from 'react'
import { View, Text , ScrollView, TouchableOpacity ,StyleSheet , Image, Button} from 'react-native'
import Loading from '../../components/Loading';
import { useNavigation } from "@react-navigation/native";

const UserGuest = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      centerContent = {true}
      style= {styles.viewBody}
    >
     <Image source={require('../../assets/restaurante.png')}
      resizeMode = 'contain'
      style = {styles.image}
     />
     <Text style={styles.title}>Consulta tu perfil en Restaurant</Text>
     <Text style={styles.description}>
       ¿Como describirias tu mejor restaurante ? Busca y visualiza los mejores restaurantes en sopetran
       de forma sencilla , vota cual te ha gustado mas y comenta como ha sido tu experiencia .
     </Text>
     <TouchableOpacity
       onPress={()=> navigation.navigate('login')}
     style={styles.boton}>
       <Text style={styles.btnTexto}>Ver tu perfil</Text>
     </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewBody : {
    marginHorizontal : 30
  },
   image : {
      height: 300,
      width: "92%",
      marginTop : 30,
      marginBottom : 10,
     
   },
   title : {
     fontWeight : "bold",
     fontSize : 19,
     marginVertical : 10,
     textAlign : 'center'
   },
   description : {
      textAlign : 'justify',
      marginBottom : 20,
      color: '#a65273',
      fontWeight : '800',
      fontSize : 15
     },
     boton : {
        backgroundColor : "#442484",
        height: 40,
        borderRadius : 8
     },
     btnTexto : {
       textAlign : 'center',
       marginVertical : 5,
       fontSize : 18,
       color: "#ffe",
       fontWeight : 'bold'
     }
})
export default UserGuest