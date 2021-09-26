import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Details from '../artist/Details';
import Overview from '../artist/Overview';
import Search from '../Search';

const Stack = createStackNavigator();


const SearchScreen = () => {
  
    return (
      <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Overview" component={Overview} 
      //@ts-expect-error
      options={({route : {params}})=>({title: params.data.name})}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
    );
}

export default SearchScreen;