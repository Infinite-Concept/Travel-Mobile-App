import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import hello from "../assets/images/traveler.png"

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Welcome")
        }, 3000)

        return () => clearTimeout(timer)
    }, [])
  return (
    <View style={styles.splash}>
      <StatusBar hidden />
      <Image source={hello} />
      <Text style={styles.text}>Traveler</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        backgroundColor: "#F3F5F6",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontFamily: "Poppins_700Bold",
        color: "#1BBA85",
        fontSize: 40
    }
})