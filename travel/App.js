import { View, Text, Image } from 'react-native'
import React, { Children, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import {Poppins_700Bold, Poppins_600SemiBold, Poppins_500Medium, Poppins_400Regular} from "@expo-google-fonts/poppins"
import {Nunito_700Bold, Nunito_400Regular} from "@expo-google-fonts/nunito"
import * as Font from "expo-font"
import WelcomeScreen from './screens/WelcomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Defines Icon
const homeIcon = require('./assets/icons/home.png');
const messageIcon = require('./assets/icons/message.png');
const notificationIcon = require('./assets/icons/notification.png');
const profileIcon = require('./assets/icons/profile.png');


function Home() {
  return (
      <Tab.Navigator initialRouteName='HomeScreen' screenOptions={{ tabBarStyle: {backgroundColor: "red"}, headerShown: false,}}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarIcon: ({focused}) => {
          <Image source={homeIcon} style={{
            width: 25,
            height: 25,
            tintColor: focused ? 'blue' : 'gray',
          }}/>
        }}}/>
        <Tab.Screen name="MessageScreen" component={MessageScreen} />
        <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
  );
}


const App = () => {
  const [token, setToken] = useState(null);

  const LoadFont = async () => {
    await Font.loadAsync({
      Poppins_700Bold,
      Poppins_600SemiBold,
      Poppins_500Medium,
      Poppins_400Regular,
      Nunito_700Bold,
      Nunito_400Regular
    })
  }

  useEffect(() => {
    LoadFont()
    getToken()
  }, [])

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token')

      if(token){
        setToken(token)
      }
    } catch (error) {
      console.error('failed to get token', error);
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          !token ? (
            <>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="Onboard" component={OnboardingScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <Stack.Screen name="Home" component={Home} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App