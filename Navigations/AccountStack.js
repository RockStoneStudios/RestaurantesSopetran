import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '../Screens/account/Account';
import Login from '../Screens/account/Login';
import Register from '../Screens/account/Register';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
     <Stack.Navigator>
         <Stack.Screen  name='account' component={Account} options={{title : "Cuenta", headerTitleAlign : 'center'}} />
         <Stack.Screen  name='login' component={Login} options = {{title : 'Iniciar Sesion', headerTitleAlign : 'center'}} />
         <Stack.Screen name='register' component={Register} options = {{title : 'Registrarse' , headerTitleAlign : 'center'}}/>
     </Stack.Navigator>
  )
}

export default AccountStack