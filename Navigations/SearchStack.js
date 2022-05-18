import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../Screens/Search';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
     <Stack.Navigator>
         <Stack.Screen  name='search' component={Search} options={{title : "Buscar", headerTitleAlign : 'center'}} />
     </Stack.Navigator>
  )
}

export default SearchStack