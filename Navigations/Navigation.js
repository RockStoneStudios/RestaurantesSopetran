import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FavoritosStack from './FavoritosStack';
import AccountStack from './AccountStack';
import SearchStack from './SearchStack';
import RestaurantesStack from './RestaurantesStack'
import TopRestaurantesStack from './TopRestaurantesStack';

import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Navigation = () => {
 
    const screenOptions = (route,color)=>{
        let iconName;
        switch(route.name) {
            case "restaurantes" :
                iconName = "compass-outline"
                break;
            case "favoritos" :
                iconName = "heart-outline"
                break;   
            case "top-restaurantes" :
                iconName = "star-outline"
                break;    
            
            case "search":
                iconName ="magnify"
                break;
            case "account": 
                iconName = "home-outline"
                break;
        }
        return(
            <Icon
               name = {iconName}
               size = {22}
               color = {color}
              />
        )
    }

  return (
      <NavigationContainer>
          <Tab.Navigator 
           
            screenOptions={{
             
                 headerShown : false,
                 tabBarActiveTintColor : "#230126",
                 tabBarInactiveTintColor : "#a17dc3"
            }}
            
          >
              <Tab.Screen name='restaurantes' component={RestaurantesStack}
                options = {{tabBarLabel : "Restaurantes",  tabBarIcon :({color,size})=>(
                    <Icon name='compass-outline' color={color} size= {30} />
                )}}
              />
              <Tab.Screen name='favoritos' component={FavoritosStack}
                 options = {{tabBarLabel : "Favoritos", tabBarIcon :({color,size})=>(
                    <Icon name='heart-outline' color={color} size= {30} />
                )}}
              />
              <Tab.Screen name='top-restaurantes' component={TopRestaurantesStack}
                   options = {{tabBarLabel : "Top 5", tabBarIcon :({color,size})=>(
                    <Icon name='star-outline' color={color} size= {30} />
                )}}
              />
              <Tab.Screen name='search' component={SearchStack} 
                  options = {{tabBarLabel : "Busqueda",tabBarIcon :({color,size})=>(
                    <Icon name='magnify' color={color} size= {30} />
                )}}
              />
              <Tab.Screen name='account' component={AccountStack}
                 options = {{tabBarLabel : "Cuenta", tabBarIcon :({color,size})=>(
                    <Icon name='home-outline' color={color} size= {30} />
                )}}
              />
          </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Navigation