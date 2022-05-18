import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopRestaurantes from '../Screens/TopRestaurantes';

const Stack = createNativeStackNavigator();

const TopRestaurantesStack = () => {
  return (
     <Stack.Navigator>
         <Stack.Screen  name='top-restaurantes' component={TopRestaurantes} options={{title : "Mejores Restaurantes", headerTitleAlign : 'center'}} />
     </Stack.Navigator>
  )
}

export default TopRestaurantesStack