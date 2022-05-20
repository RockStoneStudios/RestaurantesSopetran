import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const InfoUser = ({user}) => {
  console.log(user);
  return (
    <View style={styles.container}>
     <UserAvatar
     name= "Omar Ortiz"
       size={150}
       src = {user.photoURL ? {uri : photoURL} : "https://img.myloview.com/posters/default-avatar-profile-icon-vector-social-media-user-image-400-205124837.jpg"}
     />
     <View style={styles.infoUser}>
       <Text style={styles.displayName}>{user.displayName ? user.displayName : "Anonimo"}</Text>
       <Text>{user.email}</Text>
     </View>
    </View>
  )
}

export default InfoUser

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
     alignItems : 'center',
     justifyContent : 'center',
     backgroundColor : "#f9f8f9",
     paddingVertical : 30
  },
   infoUser : {
      marginLeft : 10,

   },
    displayName : {
      color: "#101",
      fontSize : 15,
      fontWeight : 'bold',
      marginBottom : 2
    }
})