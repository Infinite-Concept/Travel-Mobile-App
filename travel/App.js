import { View, Text, Image, StyleSheet } from 'react-native'
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
import EditProfileScreen from './screens/EditProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Defines Icon
const homeIcon = require('./assets/icons/home.png');
const messageIcon = require('./assets/icons/message.png');
const messageIconNA = require('./assets/icons/messageNA.png');
const notificationIcon = require('./assets/icons/notification.png');
const notificationIconNA = require('./assets/icons/notificationNA.png');
const profileIcon = require('./assets/icons/profile.png');
const profileIconNA = require('./assets/icons/profileNA.png');


function Home() {
  return (
      <Tab.Navigator initialRouteName='HomeScreen' screenOptions={{ 
        tabBarStyle: {backgroundColor: "#FFFFFF", elevation: 0, borderWidth: 0,}, 
        headerShown: false,
        tabBarLabelPosition: "beside-icon",      
      }}
        >
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
          tabBarIcon: ({focused}) =>(
            <View style={[styles.tabItemContainer, {backgroundColor: focused ? "#1CB986" : "#D2D3D5"}]}>
              <Image
              source={homeIcon}
              style={[styles.icon]}
            /> 
            <Text style={[styles.labelText]}>Home</Text>
          </View>
          ),
          tabBarLabel: () =>  null
        }}/>
        <Tab.Screen name="MessageScreen" component={MessageScreen} options={{
          tabBarIcon: ({focused}) => focused ? <Image source={messageIconNA} /> : <Image source={messageIcon} />,
          tabBarLabel: ({focused}) =>  null
        }} />
        <Tab.Screen name="NotificationScreen" component={NotificationScreen} options={{
          tabBarIcon: ({focused}) => focused ? <Image source={notificationIconNA} /> : <Image source={notificationIcon} />,
          tabBarLabel: () =>  null
        }} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
          tabBarIcon: ({focused}) => focused ? <Image source={profileIconNA} /> : <Image source={profileIcon} />,
          tabBarLabel: () =>  null
        }} />
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
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  tabItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 8, // Adjust the spacing between icon and text as needed
  },
  labelText: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "Nunito_700Bold",
  },
})