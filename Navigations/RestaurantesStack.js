import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Restaurantes from '../Screens/Restaurantes';

const Stack = createNativeStackNavigator();

const RestaurantesStack = () => {
  return (
     <Stack.Navigator>
         <Stack.Screen  name='restaurantes' component={Restaurantes} options={{title : "Restaurantes", headerTitleAlign : 'center'}} />
     </Stack.Navigator>
  )
}

export default RestaurantesStack