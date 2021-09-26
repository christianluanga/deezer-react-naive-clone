import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MusicScreen from './src/components/Screens/HomeScreen';
import PodcastScreen from './src/components/Screens/PodcastScreen';
import SearchScreen from './src/components/Screens/SearchScreen';
import PremiumScreen from './src/components/Screens/PremiumScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        tabBarActiveTintColor: 'tomato'
      })}>
        <Tab.Screen name="Music" component={MusicScreen} 
          options={({ route }) => ({
            tabBarIcon: ({color, size})=>(
              <MaterialCommunityIcons name="music" color={color} size={size}/>
            )
          })
          }/>
        <Tab.Screen name="Podcasts" component={PodcastScreen} 
        options={({ route }) => ({
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons name="podcast" color={color} size={size}/>
          )
        })
        }/>
        <Tab.Screen name="Search" component={SearchScreen} 
        options={({ route }) => ({
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons name="magnify" color={color} size={size}/>
          ),
          headerShown: false
        })
        }/>
        <Tab.Screen name="Premium" component={PremiumScreen} 
        options={({ route }) => ({
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons name="bullseye" color={color} size={size} />
          )
        })
        }/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
