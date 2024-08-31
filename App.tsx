import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Splash from './componants/Splash'
import Home from './componants/Home'
import Details from './componants/Details'
import Search from './componants/Search'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={Home}
      options={({ navigation }) => ({
        headerShown: true,
        title: 'Home',
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff', fontWeight: 'bold', },
        headerStyle: { backgroundColor: '#000', },
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('search')}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031293.png' }}
              tintColor="white" style={{ width: 24, height: 24, marginRight: 15 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen name="details" component={Details} options={{
      headerShown: true,
      title: 'Movie Details',
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#000',
      }
    }} />
  </Stack.Navigator>
)

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{
    tabBarStyle: {
      backgroundColor: '#000',
      borderTopColor: '#000',
      borderTopWidth: 1,
    },
    tabBarActiveTintColor: '#fff',
    tabBarInactiveTintColor: '#8c8c8c',
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  }}>
    <Tab.Screen name="Home" component={HomeStack} options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <Image
          source={{ uri: focused ? 'https://img.icons8.com/material-rounded/24/000000/home.png' : 'https://img.icons8.com/material-outlined/24/000000/home.png' }}
          style={{
            width: 24, height: 24, tintColor: focused ? '#fff' : '#8c8c8c'
          }}
        />
      )
    }} />
    <Tab.Screen name="search" component={Search} options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <Image
          source={{ uri: focused ? 'https://cdn-icons-png.flaticon.com/512/3031/3031293.png' : 'https://cdn-icons-png.flaticon.com/512/3031/3031293.png' }}
          style={{ width: 24, height: 24, tintColor: focused ? '#fff' : '#8c8c8c' }}
        />
      )
    }} />
  </Tab.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App