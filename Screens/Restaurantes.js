import React from 'react'
import {View, Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const Restaurantes = () => {
  return (
    <View>
       <Icon name='search' color={"#151"} size = {25} />
        <Text>Restaurantes</Text>
    </View>
  )
}

export default Restaurantes